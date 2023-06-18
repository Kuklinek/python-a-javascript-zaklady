import { deserializeCsv } from "./07%20csv%20funkce.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import jmenaAKapely from "./_data.json" assert { type: "json" };
const { jmena } = jmenaAKapely;

Deno.serve({ port: 1234 }, async (req) => {
  const url = new URL(req.url);

  switch (url.pathname) {
    case "/":
      return new Response(
        `
          <meta charset=utf-8 />
          Vítej na mé domovské stránce.<br/>
          Má se ti narodit dítě a nevíš jak ho pojmenovat? Zkus <a href=/nahodne_jmeno>tohle jméno</a>!<br/>
          Koukni na náš <a href=/csv>seznam</a> lidí a jejich oblíbených kapel!<br/>
          Koukni do naší <a href=/db>anonymizované databáze</a> lidí, kteří odmítli podepsat GDPR!
          `,
        { headers: { "Content-Type": "text/html" } },
      );

    case "/nahodne_jmeno":
      return new Response(jmena[Math.floor(Math.random() * jmena.length)], {
        headers: { "Content-Type": "text/plain" },
      });

    case "/csv": {
      const radky = deserializeCsv(await Deno.readTextFile("_soubor.csv"));
      return new Response(JSON.stringify(radky), {
        headers: { "Content-Type": "application/json" },
      });
    }

    case "/db": {
      const db = new Client(Deno.env.get("POSTGRES_URL"));
      const vysledky = await db.queryObject<{ name: string; age: number }>(
        "SELECT * FROM plno_inteligence;",
      );
      return new Response(
        "<meta charset=utf-8 />" +
          "<ol>" +
          vysledky.rows.map((row) =>
            `<li>Jméno: ${row.name}, věk: ${row.age}</li>`
          ).join("") +
          "</ol>",
        { headers: { "Content-Type": "text/html" } },
      );
    }

    default:
      return new Response("Stránka nenalezena :c", { status: 404 });
  }
});

import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";
import jmenaAKapely from "./_data.json" assert { type: "json" };
const { jmena } = jmenaAKapely;

const db = new Client(Deno.env.get("POSTGRES_URL"));

await db.queryArray(`
    CREATE TABLE IF NOT EXISTS plno_inteligence (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        age INTEGER
    );
`);

// await db.queryArray(`DROP TABLE IF EXISTS plno_intelligence;`);

const name = jmena[Math.floor(Math.random() * jmena.length)];
const age = Math.floor(Math.random() * 100);

await db.queryArray(
  `INSERT INTO plno_inteligence (name, age)
   VALUES ($name, $age);`, // nevkládat přímo stringy protože https://xkcd.com/327/
  { name, age },
);

const result = await db.queryObject("SELECT * FROM plno_inteligence");
console.log(result.rows);

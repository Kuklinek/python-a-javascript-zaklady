import { serializeCsv, deserializeCsv } from "./07%20csv%20funkce.ts"
import jmenaAKapely from "./_data.json" assert { type: "json" };
const { jmena, kapely } = jmenaAKapely;
const filename = "_soubor.csv";

function vyberNahodnyElement(arr: string[]): string {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const text = await Deno.readTextFile(filename);
const tabulka = deserializeCsv(text);

tabulka.push({
  name: vyberNahodnyElement(jmena),
  age: Math.floor(Math.random() * 100).toString(),
  favorite_band: vyberNahodnyElement(kapely),
});

await Deno.writeTextFile(filename, serializeCsv(tabulka));

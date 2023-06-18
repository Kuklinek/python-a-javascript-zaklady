export function deserializeCsv(text: string): Record<string, string>[] {
  const rows = text.split(/\r?\n|\r/gm).filter((row) => row !== "");
  const cells = rows.map((row) => row.split(","));

  const keys = cells[0];
  const objs = cells.slice(1).map((values) => {
    const obj: Record<string, string> = {};
    for (let i = 0; i < values.length; i++) {
      obj[keys[i]] = values[i];
    }
    return obj;
  });

  return objs;
}

export function serializeCsv(table: Record<string, string>[]): string {
  const keys = Object.keys(table[0]);

  const cells = [
    keys,
    // tabulka je seznam objektů, v každém objektu jsou
    // páry klíč-hodnota. nejdřív projdeme tabulku, pro
    // každý objekt potom:
    // projdeme seznam známých klíčů, a pro každý klíč
    // vrátíme jemu odpovídající hodnotu
    ...table.map((obj) => keys.map((key) => obj[key])),
  ];

  return cells.map((row) => row.join(",")).join("\r\n");
}

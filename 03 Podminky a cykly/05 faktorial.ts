// deno-lint-ignore-file no-unused-vars

// toto je klasika
function fact1(n: number) {
  let a = 1;

  for (let i = 1; i <= n; i++) {
    a *= i;
  }

  return a;
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i}! = ${fact1(i)}`);
}

// toto je memoizovaná fce pro lepší výkon
const cache: number[] = [];
function fact1_memo(n: number) {
  if (cache[n] !== undefined) return cache[n];

  let a = 1;

  for (let i = 1; i <= n; i++) {
    a *= i;
  }

  cache[n] = a;
  return a;
}

// tohle zvládne i faktoriál třiceti
function fact1_big(n: bigint): bigint {
  let a = 1n;

  for (let i = 1n; i <= n; i++) {
    a *= i;
  }

  return a;
}

// přes rekurzi
function fact2(n: number): number {
  if (n === 0) return 1;
  return n * fact2(n - 1);
}

function fact3(n: number) {
  // ekvivalent range(n) v pythonu
  // v js bohužel musíme vytvořit array o dané délce,
  // vyplnit ho jakýmikoliv hodnotami, a potom použít
  // map, abychom ho vyplnili čísly 1, 2, ..., n
  const range = Array(n).fill(0).map((_, i) => i + 1);

  return range.reduce((a, b) => a * b, 1);
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i}! = ${fact3(i)}`);
}

function* factory() {
  let a = 1;
  let i = 1;

  while (true) {
    yield a;
    a *= i++;
    // i++ nejdřív vyplivne hodnotu i, pak increment
    // ++i nejdřív increment, pak vyplivne i
  }
}

for (const n of factory()) {
  console.log(n);
  if (n > 1e7) break;
}

function ntyFib(n: number) {
  let a = 0;
  let b = 1;

  for (let i = 1; i < n; i++) {
    // Šlo by udělat takhle:
    // const noveA = b;
    // const noveB = a + b;
    // a = noveA;
    // b = noveB;

    // Totéž pomocí destrukturujícího přiřazení
    [a, b] = [b, a + b];
  }

  return a;
}

console.log(ntyFib(7));

// tohle je generátor fibonacciho čísel
function* fib() {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

for (const n of fib()) {
    console.log("Další číslo je: ", n);
    if (n > 100) break;
}

const iterator = fib();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

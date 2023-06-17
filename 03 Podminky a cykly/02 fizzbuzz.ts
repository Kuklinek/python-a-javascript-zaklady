function fizzbuzz(n: number) {
  // and = &&, or = ||, not = !
  if (n % 3 === 0 && n % 5 === 0) return `fizzbuzz`;
  if (n % 3 === 0) return `fizz`;
  if (n % 5 === 0) return `buzz`;
  return n;
}

for (let i = 0; i <= 20; i++) console.log(fizzbuzz(i));

let i = 0;
while (i <= 20) {
  console.log(fizzbuzz(i));
  i++;
}

i = 0;
do {
  console.log(fizzbuzz(i));
  i++;
} while (i <= 20);

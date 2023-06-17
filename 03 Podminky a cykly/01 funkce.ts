function zdvojnasob(n: number): number {
  return 2 * n;
}

console.log(zdvojnasob(24));

function popisCislo(n: number): string {
  if (n > 1_000) {
    return `${n} je VELKÉ číslo!`;
  }

  if (n % 2 === 0) return `${n} je sudé číslo.`;

  return `${n} je liché číslo.`;
}

console.log(popisCislo(24_002), popisCislo(2), popisCislo(115));

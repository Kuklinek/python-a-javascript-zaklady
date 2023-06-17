const arr = [1, 1, 2, 3, 5, 8, 13, 21];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.pop(); // odeber poslední hodnotu
arr.push(420); // přidej novou hodnotu
arr[0] = -2; // změň první hodnotu

for (const el of arr) {
  console.log(el);
}

console.log(arr.join(", "));

const sudyArr = arr.filter((n) => n % 2 === 0);
console.log(sudyArr.join(", "));

const dalsiArr = sudyArr
  .map((mojeCislo) => mojeCislo / 2)
  .map((n) => `Další číslo je ${n}.`)
  .map((s) => s.toUpperCase());

console.log(dalsiArr.join(" "));

const arr2 = [-1, 1, 8, 4];
console.log("Array je: ", arr2);
console.log(
  "Jsou všechny hodnoty v array kladné?",
  arr2.every((n) => n > 0),
);
console.log(
  "Jsou všechny hodnoty v array větší než -10?",
  arr2.every((n) => n > -10),
);
console.log(
  "Je v arrayi hodnota dělitelná čtyřma?",
  arr2.some((n) => n % 4 === 0),
);

const _prvniLichePrvocislo = [2, 3, 5, 7].find((x) => x % 2 !== 0);

const _soucetArr2 = arr2.reduce((a, b) => a + b, 0);
const _soucinArr2 = arr2.reduce((a, b) => a * b, 1);

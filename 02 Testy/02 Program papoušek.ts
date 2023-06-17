console.log("Ahoj, jsem papoušek. Vše co napíšeš 2x zopakuji")
const vstup = prompt("Tak něco napiš: ")

const vystup = vstup + ", "+ vstup + "!"
// alternativně:
const vystup2 = `${vstup}, ${vstup}!`;

console.log(vystup)
console.log(vystup2)


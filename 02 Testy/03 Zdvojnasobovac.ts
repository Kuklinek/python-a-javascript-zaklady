console.log("Ahoj, jsem zdvojnasobovac. Kazde cislo vynasobim dvema.")
let vstup = prompt("Toz zadej cislo: ") ?? "" // bacha tohle je string
const vystup = vstup + vstup // a protoze vstup je string, tak to vlastne ve vysledku da retezec 2x za sebou, ale nevynasobi cislo!!!
console.log(vystup)

vstup = prompt("Jaj počkat to jsem nějak pos...kazil. Ještě jednou pls:") ?? ""
const vstupCislo = parseFloat(vstup)
console.log(vstupCislo + vstupCislo)

function tovarnaNaScitaciFunkce(a: number) {
  return function pricti(b: number) {
    return a + b;
  };
}

const prictiDva = tovarnaNaScitaciFunkce(2);
console.log(prictiDva(8));

function tovarnaNaNasobiciFunkce(a: number) {
  return (b: number) => a * b;
}

const vynasobPulkou = tovarnaNaNasobiciFunkce(0.5);
console.log(vynasobPulkou(8));

function tovarnaNaFunkceProdukujiciId() {
  let currentId = 0;
  return () => currentId++;
}

const generujId = tovarnaNaFunkceProdukujiciId();
console.log(generujId());
console.log(generujId());
console.log(generujId());
console.log(generujId());
console.log(generujId());

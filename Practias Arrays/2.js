const frecuence = new Map ();
for (let i = 1; i < 11; i++) {
    frecuence.set(i, 0);
}

for (let i = 0; i < 10000; i++) {
    let random = Math.floor(Math.random()*10)+1;
    let value = frecuence.get(random);
    frecuence.set(random, ++value);
}

console.log('Frecuencias:')
for (let [number, value] of frecuence) {
    console.log (`Nº${number}: ${value}`);
}
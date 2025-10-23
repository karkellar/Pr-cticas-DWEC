const words = [];
let word = ' ';
const map = new Map();
while (word !== ''){
    word = prompt("INTRODUCE TUS PALABRAS:");
    words.push(word);
}
console.log(words);
let value = map.get(word);
map.set(word, ++value);
console.log(map);
console.log('Frecuencias:')
for (let [number, value] of map) {
    console.log (`Nº${number}: ${value}`);
}
let words = [];
let word = ' ';
while (word !== ''){
    word = prompt("INTRODUCE TUS PALABRAS:");
    words.push(word);
}
console.log(words);
function getMap (array) {
    const map = new Map([words]);
    for(let element of map) {
        console.log(element);
    }
}
words.getMap();
console.log(map);
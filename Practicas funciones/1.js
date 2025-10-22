let words = [];
let word = ' ';
while (word !== ''){
    word = prompt("INTRODUCE TUS PALABRAS:");
    words.push(word);
}
console.log(words);
function reorder(array) {
    words.sort();
    words.reverse();
}
reorder(words);
console.log(words);
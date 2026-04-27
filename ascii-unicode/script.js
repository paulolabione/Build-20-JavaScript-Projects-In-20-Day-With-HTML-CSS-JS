const characterInput = document.getElementById('character-input');
const result = document.getElementById('result');

const myList = ['a', 'b', 'c'];

function detectCharacter() {
    let character = characterInput.value;

    if (character.length === 0) {
        result.textContent = `Write something in the box BASTARD!!!`;
    }else if (isASCII(character)) {
        result.textContent = `The character ${character} is an ASCII character`;
    }else {
        result.textContent = `The character ${character} is NOT an ASCII character`;
    }
}


function isASCII(character) {
    console.log(character.charCodeAt(0));
    return character.charCodeAt(0) <= 127;
}
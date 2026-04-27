const elTitle = document.querySelector('.title');
const titleH1 = document.createElement('h1');
titleH1.classList.add('title-h1');
titleH1.textContent = 'Vowel Counter'
elTitle.append(titleH1);

const paragraph = document.querySelector('.result');
const button = document.querySelector('_button');

function checkVowels() {
  let text = document.getElementById('_text').value;
  let vowelCount = 0;

  // Convert it into lowercase
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (isVowel(char)) {
      vowelCount ++;
    }
  paragraph.textContent = `Total Vowels: ${vowelCount}`;
  }
}

function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
}

button.addEventListener('click', checkVowels);
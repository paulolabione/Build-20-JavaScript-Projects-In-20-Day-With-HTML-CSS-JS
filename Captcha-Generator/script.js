const elTitle = document.getElementById('title');
const titleH1 = document.createElement('h1');
titleH1.textContent = 'Captcha Generator';
titleH1.id = 'titleh1'
elTitle.appendChild(titleH1);

const elGeneratorBox = document.getElementById('_generator-box');
const elYourChange = document.getElementById('_client-text');

const display = document.getElementById('_status');
const body = document.body;
const submit = document.getElementById('_submit');
const refresh = document.getElementById('_refresh');
const char = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

let captcha = '';

function generateCaptcha() {
    captcha = '';
    const captchLength = 6;
    for (let i = 0; i < captchLength; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        // captcha += char.substring(randomIndex, randomIndex + 1);
        captcha += char[randomIndex];
    }

    elGeneratorBox.value = captcha;
    display.innerText = 'Captcha Generator'
}

body.onload = generateCaptcha;

submit.onclick = function checkInput() {
    const input = elYourChange.value;
    if (input === '') {
        display.innerText = 'Please Enter Text Shown Below 👇';
    }else if (input === captcha) {
        display.innerText = 'Matched 😎';
    }else {
        display.innerText = 'Not Matched 😢';
        // display.innerHTML = `This is <img style= 'width: 30px' src= "/1f0cf.svg">`;
    }
}

refresh.onclick = function refreshCaptcha() {
    elYourChange.value = '';
    generateCaptcha();
}


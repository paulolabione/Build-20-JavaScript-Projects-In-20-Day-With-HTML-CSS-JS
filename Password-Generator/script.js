const elTitle = document.getElementById('title');
const titleH1 = document.createElement('h1');
titleH1.id = 'titleh1';
titleH1.innerText = 'Password Generator';
elTitle.appendChild(titleH1);

const copyButton = document.getElementById('copy-button');
const generateButton = document.getElementById('generate-button');
const show = document.querySelector('.show');
const passwordInput = document.getElementById('password');

generateButton.onclick = function generatePassword() {
  const character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:'"
  let password = '';
  const pwdLenght = 16
    
  for (let i = 1; i <= pwdLenght; i++) {
    const randomIndex = Math.floor(Math.random() * character.length);
    password += character[randomIndex];
  }
  passwordInput.value = password;
};

// const passwordSpan = document.getElementById('generate-password');


copyButton.onclick = function copyPwd() {
  const passwordValue = passwordInput.value;
  if (passwordValue.trim() === '') {
    alert('Password is empty. Please generate a password first.')
  }else {
    // passwordSpan.innerText = password;
    // show.style.display = 'block';
    navigator.clipboard.writeText(passwordValue).then(function() {
      show.innerHTML = 'Your newww Password is:<br> ' + passwordValue;
      show.classList.add('active');
      setTimeout(() => {
        show.classList.remove('active');
      }, 2000);
      passwordInput.value = '';
    })
  }
}






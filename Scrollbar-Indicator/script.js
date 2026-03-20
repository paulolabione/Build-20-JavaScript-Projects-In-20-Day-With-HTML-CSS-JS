const elTitle = document.getElementById('title');
const titleH1 = document.createElement('h1');
titleH1.textContent = 'Scrollbar Indicator';
titleH1.id = 'titleh1';
elTitle.appendChild(titleH1);

const scrollIndicator = document.getElementById('scrollindicator');

const totalScrollHeight = document.body.scrollHeight - window.innerHeight
// scrollIndicator.innerHTML = `${totalScrollHeight} and ${window.scrollY}`

function updateScrollIndicator() {
    const scrollPercentage = (window.scrollY / totalScrollHeight) * 100;
    scrollIndicator.style.width = scrollPercentage + '%';
    // scrollIndicator.style.height = scrollPercentage + '%';
}

window.addEventListener('scroll', updateScrollIndicator);

// window.addEventListener('scroll', () => {
//     const scrollPercentage = (window.scrollY / totalScrollHeight) * 100;
//     scrollIndicator.style.width = scrollPercentage + '%';
// });
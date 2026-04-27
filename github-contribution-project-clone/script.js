const elTitle = document.querySelector('.title');
const titleH1 = document.createElement('h1');
titleH1.classList.add('title-h1');
titleH1.textContent = 'Github Contribution Project Clone';
elTitle.append(titleH1);

const container = document.getElementById('_container');

// Adding different green colours

let greenColorCodes = [
    '#7cfc00',
    '#78ab46',
    '#3b5323', 
    '#458b00',
    '#bced91',
    '#61b329',
    '#5dfc0a',
    '#4cbb17',
    '#4ac948',
    '#00ee00',
    '#33ff33',
    '#00c957'
];

let greenColorCodes2 = [
    '#00fc00',
    '#782222',
    '#3b5323',
    '#400ddd'
];

const numberOfSquares = 99;

for (let i = 0; i < numberOfSquares; i++) {
    const activity = document.createElement('div');
    activity.classList.add('activity');

    activity.addEventListener('mouseover', () => {
        addColor(activity);
    });

    activity.addEventListener('mouseout', () => {
        stickColor(activity);
    })

    container.append(activity);
};

function addColor(squaretile) {
    const gettingColor = greenColors();
    squaretile.style.backgroundColor = gettingColor;
    squaretile.style.boxshadow = `0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`;
}

function stickColor(squaretile) {
    const gettingColor = greenColors2();
    squaretile.style.backgroundColor = gettingColor;
    squaretile.style.boxshadow = `0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`;
}

function greenColors() {
    return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];
}

function greenColors2() {
    return greenColorCodes2[Math.floor(Math.random() * greenColorCodes2.length)];
}
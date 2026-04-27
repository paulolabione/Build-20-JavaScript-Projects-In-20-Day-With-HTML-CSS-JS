const elPopover = document.querySelector('.popover');

const elMyBtn = document.getElementById('my-btn');

const elCloseBtn = document.getElementById('close-btn');


function popover() {
    elPopover.classList.add('show')
}

function close() {
    elPopover.classList.remove('show');
}

elMyBtn.addEventListener('click', popover);

elCloseBtn.addEventListener('click', close);
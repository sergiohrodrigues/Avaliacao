let one = document.querySelector('#one')

one.addEventListener('click', () => {
    one.style.backgroundColor = '#7C8798';
})


let submit = document.querySelector('#submit');
let principal = document.querySelector('.principal');
let active = document.querySelector('.active');

submit.addEventListener('click', () => {
    principal.style.display = 'none';
    active.style.display = 'block';
})



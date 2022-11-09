let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')

one.addEventListener('click', () => {
    let um = one.style.backgroundColor = '#7C8798';
    one.addEventListener('click', () => {
        one.style.backgroundColor = '#262E38';
    })
    one.style.backgroundColor.hover = '#FC7614'
})

two.addEventListener('click', () => {
    let dois = two.style.backgroundColor = '#7C8798';
    two.addEventListener('click', () => {
        two.style.backgroundColor = '#262E38';
    })
    two.style.backgroundColor.hover = '#FC7614'
})

three.addEventListener('click', () => {
    let tres = three.style.backgroundColor = '#7C8798';
    three.addEventListener('click', () => {
        three.style.backgroundColor = '#262E38';
    })
    three.style.backgroundColor.hover = '#FC7614'
})

four.addEventListener('click', () => {
    let quatro = four.style.backgroundColor = '#7C8798';
    four.addEventListener('click', () => {
        four.style.backgroundColor = '#262E38';
    })
    four.style.backgroundColor.hover = '#FC7614'
})

five.addEventListener('click', () => {
    let cinco = five.style.backgroundColor = '#7C8798';
    five.addEventListener('click', () => {
        five.style.backgroundColor = '#262E38';
    })
    five.style.backgroundColor.hover = '#FC7614'
})


let submit = document.querySelector('#submit');
let principal = document.querySelector('.principal');
let active = document.querySelector('.active');

submit.addEventListener('click', () => {
    principal.style.display = 'none';
    active.style.display = 'block';
})

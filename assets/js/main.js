let btns = document.querySelectorAll("button");
let resultado = document.querySelector('#res')

let nota = [];

btns.forEach(botao => {
    botao.addEventListener('click', () => {
        if(nota.length === 2){
            alert('Erro, voce só pode selecionar 2')
        } else {
            botao.classList.toggle("active__button");
            nota.push(Number(botao.textContent));
        }
        })
})


let submit = document.querySelector('#submit');
let principal = document.querySelector('.principal');
let active = document.querySelector('.active');

submit.addEventListener('click', () => {
    principal.style.display = 'none';
    active.style.display = 'block';

    if(nota[0] > nota[1]){
        nota.reverse()
        res.innerHTML = `You selected ${nota[0]} out of ${nota[1]}`
    } else if(nota.length === 1){
        res.innerHTML = `You selected ${nota[0]}`
    } else {
        res.innerHTML = `You selected ${nota[0]} out of ${nota[1]}`
    }

})
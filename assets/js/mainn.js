let btns = document.querySelectorAll('button')

let valores = []

btns.forEach(botao => {
        botao.addEventListener('click', () =>{
        if (valores.length === 2){
            alert('Por favor selecione somente 2 opções')
        } else {
            botao.classList.toggle('active__button')
            valores.push(botao.textContent)
        }
    })
})


let btnSubmit = document.querySelector('#submit');
let principal = document.querySelector('.principal');
let active = document.querySelector('.active');
let res = document.querySelector('#res')

btnSubmit.addEventListener('click', () => {
    if(valores.length === 0){
        alert('Por favor selecione pelo menos 1 opção')
    } else {
        principal.style.display = 'none';
        active.style.display = 'block';
    
        if(valores[0] > valores[1]){
            valores.reverse()
            res.innerHTML = `Voce selecionou ${valores[0]} e ${valores[1]}`
        } else if(valores.length === 1){
            res.innerHTML = `Voce selecionou ${valores[0]}`
        } else {
            res.innerHTML = `Voce selecionou ${valores[0]} e ${valores[1]}`
        }
    }

})
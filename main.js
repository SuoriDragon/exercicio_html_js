const form = document.getElementById('form-deposito');
let formEValido = false;

function maiorQue(numero1, numero2) {
    return numero2 > numero1
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const campoA = document.getElementById('primeiro-campo');
    const campoB = document.getElementById('segundo-campo');
    const mensagemSucesso = `Correto! <b>${campoB.value}</b> é maior que <b>${campoA.value} </b>`;
    const mensagemErro = `Incorreto! <b>${campoB.value}</b> não é maior que <b> ${campoA.value}</b>`;

    formEValido = maiorQue(campoA.value, campoB.value);
    if(formEValido) {
        const conteinerMensagemSucesso = document.querySelector('.return-message')
        conteinerMensagemSucesso.innerHTML = mensagemSucesso
        conteinerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }else {
        const conteinerMensagemErro = document.querySelector('.return-message');
        conteinerMensagemErro.innerHTML =mensagemErro;
        conteinerMensagemErro.style.backgroundColor = 'red;'
        conteinerMensagemErro.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }
})

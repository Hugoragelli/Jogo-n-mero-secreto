let listaDeNumerosSorteados = [];
let maximoNumeroSorteado = 2;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número de 1 a 10');



function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você acertou em ${tentativa} ${palavraTentativa}`;
    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > chute) {
            exibirTextoNaTela('p', 'O número secreto é maior que o chute!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor que o chute!');
        }
    }
    tentativa++;
    limparCampo();
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * maximoNumeroSorteado);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == maximoNumeroSorteado){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}

function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10');
}

mensagemInicial();
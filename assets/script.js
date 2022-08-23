
let textoInserido = document.querySelector('#caixa1');  //input inserir
let textoResultado = document.querySelector('#caixa2'); //output onde sai a criptografia
let btn1 = document.querySelector('#btn1')  // botao criptografar
let btn2 = document.querySelector('#btn2') // botao descriptografar
let btn3 = document.querySelector('#btn-copiar') //botao copiar



function codificar(){
    let texto = textoInserido.value;
    let texto2 = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    let input = document.querySelector('#caixa2');
    input.value = texto2;
}

function descodificar(){
    let texto = textoInserido.value;
    let texto2 = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    let input = document.querySelector('#caixa1');
    input.value = texto2;
    document.querySelector('#btn-copiar').textContent='Copiar';
}

function copiar(){
    document.querySelector('#btn-copiar').addEventListener('click', copiar)
    document.querySelector('#caixa2').select();
    document.execCommand('copy');
    document.querySelector('#btn-copiar').textContent='Copiado!';
}



btn1.onclick = codificar;
btn2.onclick = descodificar;
btn3.onclick = copiar;

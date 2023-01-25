/*

OBJETIVO 1- QUANDO O USUARIO CLICAR NO BOTAO DE VER TRAILER,
DEVEMOS ABRIR A MODAL COM O VIDEO DO TRAILER.
    
    - PASSO 1 - DAR UM JEITO DE PEGAR O ELEMENTO QUE REPRESENTA O BOTAO NA TELA USANDO O JS
    
    - PASSO 2 - DAR UM JEITO DE IDENTIFICAR QUANDO O USUARIO CLICAR NO BOTÃO

    - PASSO 3 - DAR UM JEITO DE PEGAR O ELEMENTO DA MODAL NO 
    JS
    
    - PASSO 4 - ABRIR A MODAL NA TELA

OBJETIVO 2- QUANDO O USUARIO CLICAR NO X DEVEMOS FECHAR A MODAL
    
    - PASSO 1 - DAR UM JEITO DE PEGAR O ELEMENTO DE FECHAR A MODAL

    - PASSO 2 - DAR UM JEITO DE IDENTIFICAR QUANDO O USUARIO CLICAR NO X

    - PASSO 3 - FECHAR A MODAL

*/

console.log('mostrar o document', document);

console.log(document.querySelector(".botao-trailer"))

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

function alternarModal(){
    modal.classList.toggle("aberto")
}
botaoTrailer.addEventListener("click", () => {   
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});
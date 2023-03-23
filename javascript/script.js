'use strict'

const card = document.querySelectorAll('.card')
const dropzone = document.querySelectorAll('.dropzone')

card.forEach(element => {
    element.addEventListener('dragstart', dragstart)
    element.addEventListener('drag', drag)
    element.addEventListener('dragend', dragend)
})

function dragstart(){
    //console.log('Elemento começando a ser arrastado')
    dropzone.forEach((element) => {
        element.classList.add('higthligth')
    })
    this.classList.add('is-draging')
}
function drag() {
    //console.log('Elemento sendo arrastado')
}
function dragend(){
    //console.log('Fim do Movimento de arrasto')
    dropzone.forEach((element) => {
        element.classList.remove('higthligth')
    })
    this.classList.remove('is-draging')
}


dropzone.forEach((element) => {
    element.addEventListener('dragenter', dragenter)
    element.addEventListener('dragover', dragover)
    element.addEventListener('dragleave', dragleave)
    element.addEventListener('drop', drop)
})

function dragenter(){
    console.log('Entra na zona que pode ser deixado')
}
function dragover(){
    //console.log('O elemento está sendo arrastado dentro um ponto de soltura')
    this.classList.add('over')
    const cartaoArrastado = document.querySelector('.is-draging')
    this.appendChild(cartaoArrastado)
}
function dragleave(){
    //console.log('Acionado quando o elemento deixa o ponto de soltura')
    this.classList.remove('over')
}
function drop(){
    console.log('O elemento foi solto em um ponto de soltura')
}

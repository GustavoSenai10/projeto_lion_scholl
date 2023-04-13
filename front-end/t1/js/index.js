'use strict'

// import { cursos } from "./cursos.js"
import {getCursos} from "./api.js"



const curso = await getCursos()

const criarCard = function(curso){

    const card = document.createElement('div')
    card.classList.add("card")

    const foto = document.createElement('img')
    foto.classList.add('img-card')
    foto.src = `${curso.icone}`

    const sigla = document.createElement('p')
    sigla.classList.add('conteudo-card')
    sigla.textContent = curso.sigla

    card.append(foto, sigla)

    card.addEventListener('click', () => {
        localStorage.setItem('nomeCurso', curso.nome)
        localStorage.setItem('curso', curso.sigla)
        window.location.href = "../curso.html"
    })

    
  
    return card
}

const carregarCard = () => {
    const container = document.getElementById('container-card')
    const cards = curso.cursos.map(criarCard)

    container.replaceChildren(...cards)

}

// const alunosDs = () => {
//     const novaJanela = document.getElementById('container-card')
//     novaJanela.onclick = function () {
        
//     }
// }
carregarCard()
// alunosDs()

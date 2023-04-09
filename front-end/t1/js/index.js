'use strict'

// import { cursos } from "./cursos.js"
import {getCursos} from "./api.js"



const cursos = await getCursos()

const criarCard = function(cursos){

    const card = document.createElement('div')
    card.classList.add("card")

    const foto = document.createElement('img')
    foto.classList.add('img-card')
    foto.src = `${cursos.icone}`

    const sigla = document.createElement('p')
    sigla.classList.add('conteudo-card')
    sigla.textContent = cursos.sigla

    card.append(foto, sigla)

    card.addEventListener('click', () => {
        localStorage.setItem('nomeCurso', cursos.nome)
        localStorage.setItem('curso', cursos.sigla)
        window.location.href = "../t2/index.html"
    })

    
  
    return card
}

const carregarCard = () => {
    const container = document.getElementById('container-card')
    const cards = cursos.cursos.map(criarCard)

    container.replaceChildren(...cards)

}

// const alunosDs = () => {
//     const novaJanela = document.getElementById('container-card')
//     novaJanela.onclick = function () {
        
//     }
// }
carregarCard()
// alunosDs()

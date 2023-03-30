'use strict'

import { cursos } from "../js/cursos.js"

const criarCard = function(cursos){

    const card = document.createElement('div')
    card.classList.add("card")

    const foto = document.createElement('img')
    foto.classList.add('img-card')
    foto.src = `./${cursos.icone}`

    const sigla = document.createElement('p')
    sigla.classList.add('conteudo-card')
    sigla.textContent = cursos.sigla

    card.append(foto, sigla)
  
    return card
}

const carregarCard = () => {
    const container = document.getElementById('container-card')
    const cards = cursos.map(criarCard)

    container.replaceChildren(...cards)

}
carregarCard()

'use strict'

import { alunos } from "../t1/js/alunos.js"

const curso = localStorage.getItem('curso')

const listaAlunos = await alunos()(curso)

const exit = () => {
    const buttonSair = document.querySelector('.button-leave')
    buttonSair.onclick = function (){
        window.location.href = 'http://127.0.0.1:5500/front-end/t2/index.html'
    }
}

exit()

const criarCards = (aluno) =>{

    const cardAluno = document.createElement('div')

    const imgAluno = document.createElement('img')
    const nomeAluno = document.createElement('div')

    if(aluno.status == 'Cursando'){
        cardAluno.classList.add('card_cursando')
    }else{
        cardAluno.classList.add('card_finalizado')
    }

    imgAluno.src = `${aluno.foto}`
    imgAluno.classList.add('aluno-foto')

    nomeAluno.classList.add('nome-aluno')
    nomeAluno.textContent = aluno.nome

    cardAluno.append(imgAluno, nomeAluno)

    return cardAluno
}

const carregarCards = () => {
    const containerCards = document.querySelector('.container-cards')
    const alunos = listaAlunos.informacoes.map(criarCards)
    containerCards.replaceChildren(...alunos)
}

carregarCards()
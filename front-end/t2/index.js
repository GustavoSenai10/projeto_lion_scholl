'use strict'

import { alunos } from "../t1/js/alunos.js"
import { getAlunos } from "../t1/js/api.js"

const nomeCurso = localStorage.getItem('nomeCurso')
const curso = localStorage.getItem('curso')

const listaAlunos = await getAlunos(curso)

const exit = () => {
    const buttonSair = document.querySelector('.button-leave')
    buttonSair.onclick = function (){
        window.location.href = "../t1/index.html"
    }
}

exit()

const criarTituloCurso = () =>{

    const divTitulo = document.querySelector('.tituloCurso')

    const textTitulo = document.createElement('h1')
    textTitulo.classList.add('nomeCurso')
    textTitulo.textContent = nomeCurso

    divTitulo.append(textTitulo)

    return divTitulo

}

const criarCards = (aluno) =>{
    
    const cardAluno = document.createElement('div')
    cardAluno.classList.add('card')

    const content = document.createElement('div')
    content.classList.add('content')

    const imgAluno = document.createElement('img')
    imgAluno.classList.add('aluno-foto')
    imgAluno.src = `${aluno.foto}`

    const nomeAluno = document.createElement('div')
    nomeAluno.classList.add('nome-aluno')
    nomeAluno.textContent = aluno.nome

    cardAluno.append(content)
    content.append(imgAluno, nomeAluno)

    return cardAluno
}


const carregarCards = () => {
    criarTituloCurso()
    const containerCards = document.getElementById('container-cards')
    const alunos = listaAlunos.informacoes.map(criarCards)
    containerCards.append(...alunos)

    console.log(alunos)
}

carregarCards()
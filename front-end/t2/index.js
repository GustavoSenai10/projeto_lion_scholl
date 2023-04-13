'use strict'

import { getAlunos, getAlunoStatus } from "../t1/js/api.js"

const nomeCurso = localStorage.getItem('nomeCurso')
const curso = localStorage.getItem('curso')

const listaAlunos = await getAlunos(curso)
const listaALunosFinalizado = await getAlunoStatus('Finalizado')
const listaALunosCursando = await getAlunoStatus('Cursando')

// button sair
const exit = () => {
    const buttonSair = document.querySelector('.button-leave')
    buttonSair.onclick = function (){
        window.location.href = "../home.html"
    }
}

exit()

// verifiaçao de status aluno
const verificacaoAluno = (array) =>{
    let listaAlunos = array
    let arrayAlunos = []    

    listaAlunos.forEach((aluno) => {
        let jsonAluno = {}
        
        if (aluno.curso == nomeCurso){
            jsonAluno = {
                nome: aluno.nome,
                foto: aluno.foto,
                matricula: aluno.matricula,
                sexo: aluno.sexo,
                status: aluno.status,
                curso: aluno.curso
            }
            arrayAlunos.push(jsonAluno)
        }
    })
    let informacoes = {
        arrayAlunos
    }
    return informacoes
}
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

    if(aluno.status == 'Cursando'){
        cardAluno.classList.add('card_cursando')
        console.log(cardAluno)
    }else{
        cardAluno.classList.add('card_finalizado')
        console.log(cardAluno)
    }

    const content = document.createElement('div')
    

    const imgAluno = document.createElement('img')
    

    const nomeAluno = document.createElement('div')
    

    

    content.classList.add('content')

    imgAluno.classList.add('aluno-foto')
    imgAluno.src = `${aluno.foto}`

    nomeAluno.classList.add('nome-aluno')
    nomeAluno.textContent = aluno.nome

    cardAluno.append(content)
    content.append(imgAluno, nomeAluno)

    
    return cardAluno
}


const carregarCards = () => {
    criarTituloCurso()
    
    const containerCards = document.querySelector('.container-cards')

    const status = document.getElementById('status')
    const cursando = document.getElementById('cursando')
    const finalizado = document.getElementById('finalizado')

    let alunos = listaAlunos.informacoes.map(criarCards)
    containerCards.replaceChildren(...alunos)

    const inputYear = document.getElementById('input-ano')
    inputYear.addEventListener('keydown', (e) =>{
        if(e.key == "Enter"){
            console.log(listaAlunos)
            const ano = inputYear.value
            let jsonAlunos = alunosAno(listaAlunos.informacoes, ano)
            alunos = jsonAlunos.listaAlunos.map(criarCards)
            containerCards.replaceChildren(...alunos)
        }
    })

    cursando.onclick = () => {
        filtrarAnoComStatus(listaALunosCursando.informacoes)
    }
    finalizado.onclick = () => {
        filtrarAnoComStatus(listaALunosFinalizado.informacoes)
    }
    status.onclick = () => {
        filtrarAnoComStatus(listaAlunos.informacoes)
    }

}

const filtrarAnoComStatus = (listaArray) =>{
    let lista = listaArray
    const containerCards = document.querySelector('.container-cards')
    const inputYear = document.getElementById('input-ano')
    let jsonAlunos = verificacaoAluno(lista)
    let alunos = jsonAlunos.arrayAlunos.map(criarCards)
    containerCards.replaceChildren(...alunos)
    inputYear.addEventListener('keydown', (e) =>{
        if(e.key == "Enter"){
            const ano = inputYear.value
            const arrayAlunos = alunosAno(lista, ano)
            jsonAlunos = verificacaoAluno(arrayAlunos.listaAlunos)
            alunos = jsonAlunos.arrayAlunos.map(criarCards)
            containerCards.replaceChildren(...alunos)
        }
    })
}

const alunosAno = (array, anoConclusao) => {
    let ano = anoConclusao
    let lista = array
    let jsonAluno = {}
    let listaAlunos = []
    let jsonLista = {}

    lista.forEach((aluno) => {
        if(aluno.dataConclusao == ano){
            jsonAluno = {
                nome: aluno.nome,
                foto: aluno.foto,
                matricula: aluno.matricula,
                sexo: aluno.sexo,
                status: aluno.status,
                curso: aluno.curso
            }
            listaAlunos.push(jsonAluno)
        }
    })
    jsonLista = {
        listaAlunos
    }
    return jsonLista
}

carregarCards()
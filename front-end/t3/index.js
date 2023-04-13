'user strict'

import {getAlunoStatus} from "../t1/js/api.js"
import{getAlunos} from "../t1/js/api.js"
import {getTeste} from "./teste.js"

console.log(getTeste)

const criarCard = (aluno) => {
  
  const card = document.createElement('div')
  card.classList.add("card")

  const foto = document.createElement('img')
  foto.classList.add('aluno')
  foto.src = `${aluno.image}`

  const nomeAluno = document.createElement('span')
  nomeAluno.classList.add('nome_aluno')
  nomeAluno.textContent = aluno.alunos
  
  card.append(foto,nomeAluno)
  return card

  

} 
const carregarAluno = (aluno) =>{
  const cardAluno = document.getElementById('estudante')
   const componentesCard = getTeste.alunos.map(criarCard)
  
   cardAluno.replaceChild(componentesCard)
}

console.log(carregarAluno)
carregarAluno()


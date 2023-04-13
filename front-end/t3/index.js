'use strict'; 

import { getAlunoStatus, getAlunos } from "../t1/js/api.js"; // Corrigido o nome do método importado
import { alunos } from "./teste.js"; // Corrigido o nome do objeto importado

const criarCard = (aluno) => {
  const card = document.createElement('div');
  card.classList.add("card");

  const foto = document.createElement('img');
  foto.classList.add('aluno');
  foto.src = `${aluno.foto}`;

  const nomeAluno = document.createElement('span');
  nomeAluno.classList.add('nome_aluno');
  nomeAluno.textContent = aluno.nome;

  card.append(foto, nomeAluno);
  return card;
};

const carregarAluno = (aluno) => {
  const cardAluno = document.getElementById('estudante');
  const componentesCard = alunos.map(criarCard); // Corrigido o uso de "alunos.alunos.map"

  componentesCard.forEach(componente => {
    cardAluno.appendChild(componente); // Adiciona cada componente do card ao elemento "cardAluno"
  });
};

carregarAluno();


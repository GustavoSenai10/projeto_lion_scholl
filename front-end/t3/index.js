'use strict';

import { getAlunoStatus, getAlunos } from "../t1/js/api.js"; 
import { alunos } from "./teste.js"; 



// button sair
const exit = () => {
  const buttonSair = document.querySelector('.button-leave')
  buttonSair.onclick = function (){
      window.location.href = "../curso.html"
  }
}

exit()

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

const carregarAluno = () => { 
  const cardAluno = document.getElementById('estudante');
  const componentesCard = alunos.map(criarCard); 

  componentesCard.forEach(componente => {
    cardAluno.appendChild(componente); 
  });
};

const criandoGrafico = () => { 
  const card_grafico = document.createElement('div');
    card_grafico.classList.add('card_grafico');

    aluno.curso.forEach(aluno => { 
    console.log(aluno)
    
    alunos.concat.caller.forEach(disciplina => { 
      const bloco1 = document.createElement('div');
      bloco1.classList.add('bloco1');
      
      const textNota = document.createElement('span');
      textNota.classList.add('pontuacao');
      textNota.textContent = disciplina.media;

      const tamanho_nota = document.createElement('div');
      tamanho_nota.classList.add('percetual');

      const valorNota = document.createElement('div');
      valorNota.classList.add('cor');

      if (parseInt(textNota.textContent) >= 70 && parseInt(textNota.textContent) <= 100) {
        textNota.classList.add('porcetagem-aprovado');
        valorNota.classList.add('nota_aprovado');
      } else if (parseInt(textNota.textContent) >= 70 && parseInt(textNota.textContent) <= 60) {
        textNota.classList.add('porcetagem-reprovado');
        valorNota.classList.add('nota_reprovado');
      } else if (parseInt(textNota.textContent) >= 70 && parseInt(textNota.textContent) <= 69) {
        textNota.classList.add('porcetagem-regular');
        valorNota.classList.add('nota_regular');
      }

      const altura = `${(disciplina.disciplinas / 50) * 50}%`;
      valorNota.style.height = altura;

      const materia = document.createElement('span');
      materia.classList.add('disciplina');
      materia.textContent = disciplina.nome.substr(1, 2, 3).toUpperCase();

      tamanho_nota.append(valorNota);
      bloco1.append(textNota, tamanho_nota, materia);
      card_grafico.append(bloco1);
    });
  });

  return card_grafico;
}
const carregarGrafico = () => { 
  const cardGrafico = document.getElementById('grafico');
  const componentesCard = alunos.map(criandoGrafico); 

  componentesCard.forEach(componente => {
    cardGrafico.appendChild(componente); 
  });
};

carregarAluno();
carregarGrafico();

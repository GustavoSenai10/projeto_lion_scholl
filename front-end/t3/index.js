'use strict';


import { getAlunoStatus, getAlunos,getAlunoMatriculas } from "../t1/js/api.js"

const matricula = localStorage.getItem('matricula')

// import { alunos } from "./teste.js";


// button sair
const exit = () => {
  const buttonSair = document.querySelector('.button-leave')
  buttonSair.onclick = function () {
    window.location.href = "../curso.html"
  }
}


const criarCard = (aluno) => {
  const card = document.createElement('div');
  card.classList.add("card");

  const foto = document.createElement('img');
  foto.classList.add('aluno');
  foto.src = aluno.foto;
  

  const nomeAluno = document.createElement('span');
  nomeAluno.classList.add('nome_aluno');
  nomeAluno.textContent = aluno.nome;

  card.append(foto, nomeAluno);
  return card;
};

const carregarAluno = async () => {
  const cardAluno = document.getElementById('estudante');
  const aluno = await getAlunoMatriculas(matricula)
  const arrayAlunos = []
  arrayAlunos.push(aluno)
  
  const componentesCard = arrayAlunos.map(criarCard);

  componentesCard.forEach(componente => {
    cardAluno.appendChild(componente);
  });
};

const devolverAlunosArray = async () => {
  const aluno = await getAlunoMatriculas(matricula)
  const arrayAluno = []
  arrayAluno.push(aluno)

  return arrayAluno
}

const aluno = await devolverAlunosArray()


const ctx = document.getElementById('myChart')

const atualizarGrafico = async () => {


    const nomeDisciplinas = aluno[0].disciplinas.map((index) => {
       
        return index.nomeDisciplina
    })
   
    const checagemDeNotas = aluno[0].disciplinas.map((index) => {
      
       
        return index.media
    })
  
  
   

    let arrayColors = []

    checagemDeNotas.forEach((mediaMateria) => {
        if (mediaMateria >= 0 && mediaMateria < 50) {
            arrayColors.push("rgba(193, 16, 16, 1)")
        } else if (mediaMateria >= 50 && mediaMateria < 80) {
            arrayColors.push("rgba(299, 182, 87, 1")
        } else if (mediaMateria >= 80 && mediaMateria <= 100) {
            arrayColors.push("rgba(51, 71, 176, 1)")
        }
    });

    const myChart = new Chart(ctx, {
        
        type: 'bar',
        data: {
            labels: nomeDisciplinas,
            datasets: [
                {
                    label: 'Media de Notas',
                    data: checagemDeNotas,
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: arrayColors
                }
            ],
        },
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
          
    })

   
}

exit()

carregarAluno()

atualizarGrafico()


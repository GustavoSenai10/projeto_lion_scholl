'user strict'

import {getAlunoStatus} from "../t1/js/api.js"
import{getAlunos} from "../t1/js/api.js"

const criarCard = function (aluno){

  const card = document.createElement('div')
  card.classList.add("card")

  const foto = document.createElement('img')
  foto.classList.add('aluno')
  foto.src = `${aluno.foto}`
} 


const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
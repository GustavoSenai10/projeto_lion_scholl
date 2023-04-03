'use strict'

export const getAlunos = async (sigla) => {
    const url = `https://api-projeto-lion-school.cyclic.app/v1/lion-school/alunos?sigla=${sigla}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}
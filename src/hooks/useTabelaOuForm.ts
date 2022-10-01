import { useState } from "react"

type tipovisibilidade = 'tabela' | 'form'

export default function useTabelaOuForm() {
    const [visivel, setVisivel] = useState<tipovisibilidade>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario,
    }
}
import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [cliente, setClilente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClilentes] = useState<Cliente[]>([])
    
    useEffect(obterTodos, [])
    
    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClilentes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setClilente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setClilente(Cliente.vazio())
        exibirFormulario()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }
    
    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela,
    }
}
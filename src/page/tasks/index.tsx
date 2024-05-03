import { Link } from "react-router-dom"
import Task from "../../components/tasks"
import TopoTask from "../../components/topoTask"
import Layout from "../../components/layout"
import { useEffect, useState } from "react"
import { Tarefa } from "../../interfaces/tarefa"
import api from "../../helpers/axios"

function Tasks() {
    const [tasks, setTasks] = useState<Tarefa[]>([])

    async function carregarLista() {
        const resposta = await api.get('/tasks')

        if (resposta.status == 200) {
            setTasks(resposta.data)
        }
    }

    useEffect(() => {
        carregarLista()
    }, [])

    function apagarTask(id: number) {
        api.delete(`/tasks/${id}`)
            .then(resposta => {
                if (resposta.status == 204) {
                    carregarLista()
                } else {
                    alert('Erro ao remover!')
                }
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    function alterarStatus(tarefa: Tarefa) {
        tarefa.completed = !tarefa.completed
        api.put(`/tasks/${tarefa.id}`, tarefa)
            .then(() => {
                carregarLista()
            })
    }

    return (
        <>
            <Layout>
                <Link to='/'>Voltar para Home</Link>
                <hr />
                <TopoTask carregarLista={carregarLista} />
                <hr />
                {
                    tasks.map((task) => (
                        <Task key={task.id} apagarTask={apagarTask} alterarStatus={alterarStatus} tarefa={task} />
                    ))
                }
            </Layout>
        </>
    )
}

export default Tasks
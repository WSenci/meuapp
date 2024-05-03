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
        const resposta = await api.get('/task')

        if (resposta.status == 200) {
            setTasks(resposta.data)
        }
    }

    useEffect(() => {
        carregarLista()
    }, [])

    function apagarTask(id: number) {
        const tasksAtualizadas = tasks.filter((task) => task.id !== id)
        setTasks(tasksAtualizadas)
    }

    return (
        <>
            <Layout>
                <Link to='/'>Voltar para Home</Link>
                <hr />
                <TopoTask tasks={tasks} setTasks={setTasks} />
                <hr />
                {
                    tasks.map((task) => (
                        <Task key={task.id} apagarTask={apagarTask} label={task.title} idTarefa={task.id} />
                    ))
                }
            </Layout>
        </>
    )
}

export default Tasks
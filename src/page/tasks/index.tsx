import { Link } from "react-router-dom"
import Task from "../../components/tasks"
import TopoTask from "../../components/topoTask"

function Tasks() {
    return (
        <>
            <Link to='/'>Voltar para Home</Link>
            <hr />
            <TopoTask />
            <hr />
            <Task label="Tarefa 1" />
            <Task label="Tarefa 2" />
            <Task label="Tarefa 3" />
            <Task label="Tarefa 4" />
            <Task label="Tarefa 5" />
            <Task label="Tarefa 6" />
            <Task label="Tarefa 7" />
            <Task label="Tarefa 8" />
            <Task label="Tarefa 9" />
            <Task label="Tarefa 10" />
            <Task label="Tarefa 11" />
        </>
    )
}

export default Tasks
import { Link } from "react-router-dom"

function Tasks(){
    return(
        <>
        <Link to='/'>Voltar para Home</Link>
        <h1>Tarefas</h1>
        <ul>
            <li>Tarefa 1</li>
            <li>Tarefa 2</li>
            <li>Tarefa 3</li>
            <li>Tarefa 4</li>
            <li>Tarefa 5</li>
            <li>Tarefa 6</li>
        </ul>
        </>
    )
}

export default Tasks
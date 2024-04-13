import { Link, useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={()=>{
                navigate('/tasks')
            }}>Tasks</button>
            <button onClick={()=>{
                navigate('/contato')
            }}>Contato</button>
            <button onClick={() => {
                navigate('/sobre')
            }}>Sobre</button>
            <h1>Home</h1>
            <p>Site feito em React para a aula de programação WEB 
                do 4º semestre do curso superior de Análise e 
                Desenvolvimento de Sistemas.</p>
            <Link to='/sobre'>Ir para Sobre</Link>
        </>
    )
}

export default Home

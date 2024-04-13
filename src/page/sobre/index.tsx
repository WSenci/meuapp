import { Link } from "react-router-dom"

function Sobre() {
    return (
        <>
            <Link to='/'>Voltar para Home</Link>
            <h1>Sobre</h1>
            <p>O aplicativo de vistoria de máquinas da John Deere
                desenvolvido por Bruno William, Caio Assis, Guilherme
                Pereira e Wesley Senciani, alunos do 4º semestre
                do curso superior de Análise e Desenvolvimento de
                Sistemas.</p>
        </>
    )
}

export default Sobre
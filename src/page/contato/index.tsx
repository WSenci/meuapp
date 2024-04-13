import { Link } from "react-router-dom";
import Formulario from "../../components/Formulario";

function Contato() {
    return (
        <>
            <Link to='/'>Voltar para Home</Link>
            <p>Formulário Contato</p>
            <Formulario />
        </>
    )
}

export default Contato
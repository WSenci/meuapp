import { Button, Input } from "@chakra-ui/react"
import { useState } from "react"
import api from "../../helpers/axios"

function Cadastro() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })
    function handleRegister() {
        api.post('/auth/register', userData)
            .then((resposta) => {
                if(resposta.status == 201){
                    console.log('Cadastro efetuado com sucesso!')
                } else{
                    console.log('Erro ao cadastrar!')
                }
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    return (
        <>
            <h1>Cadastre-se</h1>
            <form>
                <Input type="text" placeholder="Nome" onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                <Input type="email" placeholder="E-mail" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                <Input type="password" placeholder="Senha" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />

                <Button onClick={handleRegister}>Cadastrar</Button>
            </form>
        </>
    )
}

export default Cadastro
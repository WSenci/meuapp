import { Box, Button, Center, Checkbox, Input, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import api from "../../helpers/axios";
import { PostTarefa } from "../../interfaces/tarefa";

interface Props {
    carregarLista(): void
}

function TopoTask({ carregarLista }: Props) {
    const [nomeTask, setNomeTask] = useState('')

    function adicionarTask() {
        if (nomeTask != '') {
            const novaTarefa: PostTarefa = {
                title: nomeTask,
                completed: false
            }
            api.post('/task', novaTarefa)
                .then(() => {
                    setNomeTask('')
                    carregarLista()
                })
        }
    }

    return (
        <>
            <Text fontSize='35px' margin='5px'>Inserir nova tarefa:</Text>
            <Box bg='white' w='50%' p='4' color='black' display='flex' gap={5}>
                <Center w='50%'>
                    <Input value={nomeTask} onChange={(evento) => setNomeTask(evento.target.value)} placeholder="Digite o título da task" w='100%' />
                </Center>
                <Spacer />
                <Center>
                    <Checkbox>Realizada?</Checkbox>
                </Center>
                <Button onClick={adicionarTask} colorScheme='blue'>Inserir</Button>
            </Box>
        </>
    )
}

export default TopoTask
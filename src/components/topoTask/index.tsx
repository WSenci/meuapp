import { Box, Button, Center, Checkbox, Input, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Tarefa } from "../../interfaces/tarefa";

interface Props {
    tasks: Tarefa[]
    setTasks(tasks: Tarefa[]): void
}

function TopoTask({ tasks, setTasks }: Props) {
    const [nomeTask, setNomeTask] = useState('')

    function adicionarTask() {
        if (tasks.length > 0) {
            const ultimoId = tasks[tasks.length - 1].id
            const novaTask = {
                id: ultimoId + 1,
                title: nomeTask,
                completed: false
            }

            setTasks([...tasks, novaTask])
        }
    }

    const inputTask = useRef<HTMLInputElement | null>(null)
    useEffect(()=>{
        if(inputTask.current) inputTask.current.focus()
    }, [])

    return (
        <>
            <Text fontSize='35px' margin='5px'>Inserir nova tarefa:</Text>
            <Box bg='white' w='50%' p='4' color='black' display='flex' gap={5}>
                <Center w='50%'>
                    <Input ref={inputTask} value={nomeTask} onChange={(evento) => setNomeTask(evento.target.value)} placeholder="Digite o título da task" w='100%' />
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
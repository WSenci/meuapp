import { Button, Center, Spacer, Text } from '@chakra-ui/react'
import BoxTask from '../boxTask'
import { Tarefa } from '../../interfaces/tarefa'

interface Props {
    tarefa: Tarefa
    apagarTask(id: number): void
    alterarStatus(tarefa: Tarefa): void
}

function Task({ tarefa, apagarTask, alterarStatus }: Props) {
    return (
        <BoxTask>
            <Center>
                <Text fontSize='20px'>
                    {tarefa.id} - {tarefa.title}
                </Text>
            </Center>
            <Spacer />
            <Button mr={5} onClick={()=> alterarStatus(tarefa)} colorScheme={tarefa.completed ? 'green' : 'orange'}>{tarefa.completed ? 'Finalizado' : 'Pendente'}</Button>
            <Button onClick={() => apagarTask(tarefa.id)} colorScheme='red'>Remover</Button>
        </BoxTask>
    )
}

export default Task

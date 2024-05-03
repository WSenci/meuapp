import { Button, Center, Spacer, Text } from '@chakra-ui/react'
import BoxTask from '../boxTask'

interface Props {
    label: string
    idTarefa: number
    apagarTask(id: number): void
}

function Task({ label, idTarefa, apagarTask }: Props) {
    return (
        <BoxTask>
            <Center>
                <Text fontSize='20px'>
                    {idTarefa} - {label}
                </Text>
            </Center>
            <Spacer />
            <Button colorScheme='green'>Remover</Button>
            <Button onClick={() => apagarTask(idTarefa)} colorScheme='red'>Remover</Button>
        </BoxTask>
    )
}

export default Task

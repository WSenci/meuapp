import { Center, Spacer, Text } from '@chakra-ui/react'
import BoxTask from '../boxTask'
import ButtonTask from '../buttonTask'

interface Props {
    label: string
}

function Task({ label }: Props) {
    return (
        <BoxTask>
            <Center>
                <Text fontSize='20px'>
                    {label}
                </Text>
            </Center>
            <Spacer />
            <ButtonTask type='button' label='Pendente' color='red' />
            <ButtonTask type='button' label='Excluir' color='red' />
        </BoxTask>
    )
}

export default Task

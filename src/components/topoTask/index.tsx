import { Box, Center, Checkbox, Input, Spacer, Text } from "@chakra-ui/react";
import ButtonTask from "../buttonTask";

function TopoTask() {
    return (
        <>
            <Text fontSize='35px' margin='5px'>Inserir nova tarefa:</Text>
            <Box bg='white' w='50%' p='4' color='black' display='flex' gap={5}>
                <Center w='50%'>
                    <Input placeholder="Digite o título da task" w='100%' />
                </Center>
                <Spacer/>
                <Center>
                    <Checkbox>Realizada?</Checkbox>
                </Center>
                <ButtonTask type='button' label="Inserir" color='blue'></ButtonTask>
            </Box>
        </>
    )
}

export default TopoTask
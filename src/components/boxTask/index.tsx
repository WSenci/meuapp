import { Box } from '@chakra-ui/react'

interface Props {
   children: React.ReactNode
}

function BoxTask(props: Props) {
    const {children} = props
    return (
        <Box bg='lightgray' borderRadius='lg' w='50%' p='4' color='black' display='flex' gap={5} margin='5px'>
            {children}
        </Box>
    )
}

export default BoxTask

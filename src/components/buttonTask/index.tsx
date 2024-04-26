import { Button } from '@chakra-ui/react'

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
    color: string
}

function ButtonTask({ type, label, color }: Props) {
    return (
            <Button type={type} bg={color} size='lg' color='white' variant='solid'>
                {label}
            </Button>
    )
}

export default ButtonTask
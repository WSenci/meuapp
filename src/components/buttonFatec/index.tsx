import {Button} from '@chakra-ui/react'
//import './ButtonFatec.css' // className='botao-fatec'
//import styles from './ButtonFatec.module.css' // className={styles.botaoFatec}

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({ type, label }: Props) {
    return (
            <Button type={type} colorScheme='red' size='lg' variant='solid'>
            {label}
        </Button>
    )
}

export default ButtonFatec

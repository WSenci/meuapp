import CustomInput from '../customInput'
import ButtonFatec from '../buttonFatec'

function Formulario(){
    return(
        <>
            <CustomInput type='Name' placeholder='Nome' defaultValue=''/><br/>
            <CustomInput type='Email' placeholder='E-mail' defaultValue=''/><br/>
            <CustomInput type='Phone' placeholder='Telefone' defaultValue=''/><br/>
            <ButtonFatec type='button' label='Enviar' />
        </>
    )
}

export default Formulario
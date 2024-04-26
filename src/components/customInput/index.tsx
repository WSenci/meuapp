import './Input.css'

interface Props {
    type: 'Name' | 'Email' | 'Phone'
    placeholder: string
    defaultValue: string
}

function CustomInput({ type, placeholder, defaultValue }: Props) {
    return (
        <>
            <input className='customInput' type={type} defaultValue={defaultValue} placeholder={placeholder}>
            </input>
        </>
    )
}

export default CustomInput

import PropTypes from 'prop-types'
const InputText = ({type, addStyle, placeholder}) => {
    return(
        <input className={`form-control ${addStyle}`} type={type} placeholder={placeholder}/>
    )
}
export default InputText
InputText.propTypes = {
    type: PropTypes.string.isRequired,
    addStyle: PropTypes.string,
    placeholder: PropTypes.string
}
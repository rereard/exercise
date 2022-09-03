import PropTypes from 'prop-types'
const Button = ({ addStyle, title}) => {
    return(
        <button className={`btn ${addStyle}`}>
            {title}
        </button>
    )
}
export default Button
Button.propTypes = {
    title: PropTypes.string,
    addStyle: PropTypes.string
}
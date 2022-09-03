import PropTypes from 'prop-types'
const Month = ({month}) => {
    return(
        <div className="row">
            <span className="fs-6">
                {month}
            </span> 
        </div>
    )
}
export default Month
Month.propTypes={
    month: PropTypes.string
}
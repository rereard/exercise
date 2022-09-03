import PropTypes from 'prop-types'
import Calendar from "../../../Molecule/Calender.js"
const ContainerMainContribute = ({totalActivity}) => {
    return(
        <div className="row mt-5">
            <p>{totalActivity} contributions in the last month</p>
            <Calendar/>
        </div>
    )
}
export default ContainerMainContribute
ContainerMainContribute.propTypes = {
    totalActivity: PropTypes.number
}
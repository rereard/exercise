import PropTypes from 'prop-types'
import ListHighlight from "./ListHighlight"
const ProfileHighlight = ({highlightList}) => {
    return(
        <div className="col">
            <h6>Highlights</h6>
            {highlightList.map((list) => (
                <ListHighlight highlightList={list}/>
            ))}
        </div> 
    )
}
export default ProfileHighlight
ProfileHighlight.propTypes = {
    highlightList: PropTypes.array
}
import PropTypes from 'prop-types'
import Button from "../../Atom/Button"
import ProfileImage from "../../Atom/ProfileImage"
import ProfileHighlight from "./ProfileHighlight"
const ContainerProfile = ({name, username, workAt, email, ava, highlight}) => {
    return(
        <div className="col-md-3">
            <div className="row">
                <ProfileImage src={ava} addStyle="mb-3"/>
                <h4>{name}</h4>
                <h6 className="text-secondary">{username}</h6>
                <Button  title="Edit Profile" addStyle="btn-outline-dark text-primary ms-2 me-2"/>
                <p className="mt-3 mb-0">{workAt}</p>
                <p>{email}</p>
                <hr></hr>
                <ProfileHighlight highlightList={highlight}/>
            </div>
        </div>
    )
}
export default ContainerProfile
ContainerProfile.propTypes={
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    workAt: PropTypes.string,
    email: PropTypes.string,
    ava: PropTypes.string,
    highlight: PropTypes.array
}
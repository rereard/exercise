import PropTypes from 'prop-types'
const ProfileImage = ({src, width, addStyle}) => {
    return(
        <img src={src} width={width} className={`rounded-circle ${addStyle}`}/>
    )
}
export default ProfileImage

ProfileImage.propTypes = {
    src: PropTypes.string,
    width: PropTypes.string,
    addStyle: PropTypes.string,
}
ProfileImage.defaultProps = {
    src: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
    width: "200"
}
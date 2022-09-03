import PropTypes from 'prop-types'
const Activity = ({username, title, repo}) => {
    return(
        <div className="p-2 ms-2 mt-1">
            <div>{title}</div>
            <a href="#">{username}/{repo}</a>
        </div>
    )
}
export default Activity
Activity.propTypes={
    username: PropTypes.string,
    title: PropTypes.string,
    repo: PropTypes.string
}
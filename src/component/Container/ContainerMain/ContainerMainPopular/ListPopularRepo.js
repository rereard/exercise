import PropTypes from 'prop-types'
const ListPopularRepo = ({repoName, repoDesc, repoLang}) => {
    return(
        <div className="col-5 border border-secondary rounded p-2 ms-2 mt-2">
            <a href="#" className="text-decoration-none">{repoName}</a>
            <p className="text-secondary">{repoDesc}</p>
            <span className="mb-0 me-2 text-secondary">{repoLang}</span>
        </div>
    )
}
export default ListPopularRepo
ListPopularRepo.propTypes = {
    repoName: PropTypes.string,
    repoDesc: PropTypes.string,
    repoLang: PropTypes.string
}
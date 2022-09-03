import ListPopularRepo from "./ListPopularRepo"
import PropTypes from 'prop-types'
const ContainerMainPopular = ({popularRepo}) => {
    return(
        <div className="row mt-3">
            <p>Popular Repositories</p>
            {popularRepo.map((list) => (
                <ListPopularRepo repoName={list.repoName} repoDesc={list.repoDesc} repoLang={list.repoLang}/>
            ))}
        </div>
    )
    
}
export default ContainerMainPopular
ContainerMainPopular.propTypes={
    popularRepo: PropTypes.array
}
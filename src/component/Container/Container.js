import PropTypes from 'prop-types'
import ContainerProfile from "./ContainerProfile/ContainerProfile.js"
import ContainerMain from "./ContainerMain/ContainerMain.js"
const Container = ({props}) => {
    return (
        <div className="container text-light mt-5">
            <div className="row mb-5">
                <ContainerProfile 
                    name={props.name} 
                    username={props.username} 
                    workAt={props.workAt}
                    email={props.email}
                    ava={props.ava}
                    highlight={props.highlight}/>
                <ContainerMain popularRepo={props.popularRepo} monthlyActivity={props.monthlyActivity} username={props.username}/>
            </div>
        </div>
    )
}
export default Container
Container.propTypes = {
    props: PropTypes.object
}
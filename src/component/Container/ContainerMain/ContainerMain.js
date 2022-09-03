import InnerNav from "../../Molecule/InnerNav"
import PropTypes from 'prop-types'
import ContainerMainPopular from "./ContainerMainPopular/ContainerMainPopular.js"
import ContainerMainContribute from "./ContainerMainContribute/ContainerMainContribute.js"
import ContainerMainActivity from "./ContainerMainActivity/ContainerMainActivity.js"
const ContainerMain = ({popularRepo, monthlyActivity, username}) => {
    return(
        <div className="col ms-5">
            <InnerNav/>
            <ContainerMainPopular popularRepo={popularRepo}/>
            <ContainerMainContribute totalActivity={monthlyActivity.activity.length}/>
            <ContainerMainActivity monthlyActivity={monthlyActivity} username={username}/>
        </div>
    )
}
export default ContainerMain
ContainerMain.propTypes={
    popularRepo: PropTypes.array,
    monthlyActivity: PropTypes.object,
    username: PropTypes.string
}
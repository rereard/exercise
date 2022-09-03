import Month from "./Month.js"
import Activity from "./Activity.js"
import Button from "../../../Atom/Button.js"
import PropTypes from 'prop-types'
const ContainerMainActivity = ({monthlyActivity, username}) => {
    return(
        <div className="row mt-5">
            <p>Contribution Activity</p>
            <div className="col-10 p-2 ms-2">
                <Month month={monthlyActivity.month}/>
                <div className="row border-start border-secondary ms-2 mt-2">
                    {monthlyActivity.activity.map((list) => (
                        <Activity username={username} title={list.title} repo={list.repo} />
                    ))}
                </div>
                <div className="row">
                    <Button title="Show more activity" addStyle="btn-outline-dark text-primary btn-sm rounded mt-3"/>
                </div>
            </div>
        </div>
    )
}
export default ContainerMainActivity
ContainerMainActivity.propTypes={
    monthlyActivity: PropTypes.object,
    username: PropTypes.string
}
import Month from "./Month.js"
import Activity from "./Activity.js"
import ButtonShowMore from "./Button-ShowMore.js"
const ContainerMainActivity = () => {
    return(
        <div className="row mt-5">
            <p>Contribution Activity</p>
            <div className="col-10 p-2 ms-2">
                <Month/>
                <div className="row border-start border-secondary ms-2 mt-2">
                    <Activity/>
                    <Activity/>
                </div>
                <ButtonShowMore/>
            </div>
        </div>
    )
}
export default ContainerMainActivity
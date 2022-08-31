import ContainerMainNav from "./Container-Main-Nav.js"
import ContainerMainPopular from "./Container-Main-Popular/Container-Main-Popular.js"
import ContainerMainContribute from "./Container-Main-Contribute/Container-Main-Contribute.js"
import ContainerMainActivity from "./Container-Main-Activity/Container-Main-Activity.js"
const ContainerMain = () => {
    return(
        <div className="col ms-5">
            <ContainerMainNav/>
            <ContainerMainPopular/>
            <ContainerMainContribute/>
            <ContainerMainActivity/>
        </div>
    )
}
export default ContainerMain
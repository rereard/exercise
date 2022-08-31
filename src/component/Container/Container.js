import ContainerProfile from "./Container-Profile.js"
import ContainerMain from "./Container-Main/Container-Main.js"
const Container = () => {
    return (
        <div className="container text-light mt-5">
            <div className="row mb-5">
                <ContainerProfile/>
                <ContainerMain/>
            </div>
        </div>
    )
}
export default Container
import Button from "../Atom/Button"
const InnerNav = () => {
    return(
        <ul className="nav nav-tabs sticky-top bg-black">
            <li className="nav-item border-bottom border-warning border-2">
                <Button title="Overview" addStyle="nav-link text-light"/>
            </li>
            <li className="nav-item">
                <Button title="Repositories" addStyle="nav-link text-light"/>
            </li>
            <li className="nav-item">
                <Button title="Projects" addStyle="nav-link text-light"/>
            </li>
            <li className="nav-item">
                <Button title="Packages" addStyle="nav-link text-light"/>
            </li>
            <li className="nav-item">
                <Button title="Stars" addStyle="nav-link text-light"/>
            </li>
        </ul>
    )
}
export default InnerNav
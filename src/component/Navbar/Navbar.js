import BrandImage from "../Atom/BrandImage"
import SearchForm from "../Molecule/SearchForm"
const Navbar = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <BrandImage/>
                </a>
                <SearchForm/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-1" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">Pull Requests</a>
                        <a className="nav-link" href="#">Issues</a>
                        <a className="nav-link" href="#">Marketplace</a>
                        <a className="nav-link" href="#">Explore</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
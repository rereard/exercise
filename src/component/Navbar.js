const Navbar = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" width="30" height="24" className="d-inline-block align-text-top rounded-circle"/>
                </a>
                <form className="d-flex align-items-start" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search or jump to" aria-label="Search"/>
                    <button className="btn btn-outline-secondary" type="submit"> / </button>
                </form>
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
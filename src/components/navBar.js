const NavBar =()=>{
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
            <div className="container">
            <a href="#home" className="navbar-brand">Access<span className="text-primary">Gram</span></a>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#footer">Contact</a>
                </li>
                <li className="nav-item">
              <a className="btn btn-primary ml-lg-2" href="#check">Free Check</a>
            </li>
            </ul>
            </div>
        </div>
    </nav>
</header>
    )
}
export default NavBar
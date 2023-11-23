import reactLogo from '../assets/react.svg'

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Countries</a>
                        <a className="nav-link" href="#">Europe</a>
                        <a className="nav-link" href="#">Asia</a>
                        <a className="nav-link" href="#">Africa</a>
                    </div>
                </div>

                <div className="">
                    {/* { isLogin ? 'Log Out' : 'Connextion' } */}
                </div>
            </div>
        </nav>
    )
}
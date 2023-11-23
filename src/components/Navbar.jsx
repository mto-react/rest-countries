import reactLogo from '../assets/react.svg'

export default function Navbar({region, setRegion}) {
    // console.log(region)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-nav left">
                    <a className="navbar-brand" href="#">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                    <a className={region == 'all' ? "nav-link active" : "nav-link"} onClick={() => setRegion('all')}>Earth</a>
                    <a className={region == 'Europe' ? "nav-link active" : "nav-link"} onClick={() => setRegion('Europe')}>Europe</a>
                    <a className={region == 'Asia' ? "nav-link active" : "nav-link"} onClick={() => setRegion('Asia')}>Asia</a>
                    <a className={region == 'Africa' ? "nav-link active" : "nav-link"} onClick={() => setRegion('Africa')}>Africa</a>
                </div>

                <div className="navbar-nav right">
                    Connextion
                </div>
            </div>
        </nav>
    )
}
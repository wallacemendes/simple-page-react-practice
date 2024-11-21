import reactLogo from "../assets/reactjs-icon.png"

export default function Navbar({darkMode, toggleDarkMode}){
    return (
        <nav className={`nav-container ${darkMode ? "nav-dark" : ""}`}>
            <img className="nav-logo" src={reactLogo}/>
            <p className="nav-title">ReactFacts</p>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}
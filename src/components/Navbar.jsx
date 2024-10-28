import reactLogo from "../assets/reactjs-icon.png"

export default function Navbar(){
    return (
        <nav className="nav-container">
            <img className="nav-logo" src={reactLogo}/>
            <p className="nav-title">ReactFacts</p>
            <p className="nav-subtitle">React Course - Project 1</p>
        </nav>
    )
}
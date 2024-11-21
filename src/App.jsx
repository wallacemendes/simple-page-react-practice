import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { useState, useEffect } from "react"

export default function App(){
    const [darkMode, setDarkMode] = useState (false);

    function toggleDarkMode(){
        setDarkMode(prevToggle => !prevToggle)
    }

    useEffect(()=>{
        if(darkMode){
            document.body.classList.add('body-dark');
        }else{
            document.body.classList.remove('body-dark');           
        }
    },[darkMode]);

    return (
        <div className="container">
            < Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            < Main darkMode={darkMode}/>
        </div>
    )
}
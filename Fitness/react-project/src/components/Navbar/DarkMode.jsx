import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { AiOutlineSun } from "react-icons/ai";
const DarkMode = () => {
    //Darkmode start//
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    useEffect (() =>{
        const element = document.documentElement;
        if (theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light")
        }
    }, [theme]);
    return( <>
        {
            theme == "dark" ? (
                <AiOutlineSun  onClick={() => setTheme("light")}/>
            ) : (
                <FaMoon  onClick={() => setTheme("dark")}/>
            )
        }
    </>);
};
export default DarkMode;
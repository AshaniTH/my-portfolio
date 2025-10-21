import { createContext,useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({chilren})=>{
    const [isDarkMode, toggleDarkMode] = useState(
        localStorage.getItem("theme")||"light");

        useEffect(() =>{
            const root = window.document.documentElement;
            if(isDarkMode === "dark"){
                root.classList.add("dark");
                
            }else{
                root.classList.remove("dark");

            }
            localStorage.setItem("theme",isDarkMode);

        },[isDarkMode]
    );

    return(
        <ThemeContext.Provider value={{isDarkMode: isDarkMode === "dark", toggleDarkMode}}>
            {chilren}
        </ThemeContext.Provider>
    );
} ;

export const useTheme = () => useContext(ThemeContext);
"use client"

import { useState, useContext, createContext} from "react"
export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [mode,setMode] = useState("dark")


    const toggle =()=>{
        setMode(prev=>prev==="dark" ? "light" : "dark");
    };
    return(
    <ThemeContext.Provider value={{toggle, mode}}>
        <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    )
};
export const useTheme = () => {
    return useContext(ThemeContext);
  };
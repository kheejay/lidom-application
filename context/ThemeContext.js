"use client"

import { createContext, useState } from "react"
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
export const useState = () => {
    const context = context(ThemeContext);
    if (!context) {
      throw new Error('useState must be used within a ThemeProvider');
    }
    return context;
  };
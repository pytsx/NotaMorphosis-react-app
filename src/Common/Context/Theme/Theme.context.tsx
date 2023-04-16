import React from "react";
import { IChildren } from "../../Types";

export const ThemeContext = React.createContext({})

export const ThemeProvider = ({ children }: IChildren) => {
    return (
        <ThemeContext.Provider value={{}}>
            {children}
        </ThemeContext.Provider>
    )
}
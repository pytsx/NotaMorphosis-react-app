import React from "react";
import { IChildren } from "../../Types";
import { IThemeContext, themeType } from "./Theme.types";


export const ThemeContext = React.createContext<IThemeContext>({
    createTheme: (newTheme: {}) => [],
    theme: {}
})

export const ThemeProvider = ({ children }: IChildren) => {
    const [theme, setTheme] = React.useState<themeType>({})

    const createTheme = (newTheme: {}) => {
        return theme
    }

    return (
        <ThemeContext.Provider value={{ theme, createTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
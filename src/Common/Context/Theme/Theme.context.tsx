import React from "react";
import { IChildren } from "../../Types";
import { IThemeContext, Theme } from "./Theme.types";
import createTheme from "./createTheme";
import * as Fui from '@fluentui/theme';


export const ThemeContext = React.createContext<IThemeContext>({
    createTheme: (newTheme: {}) => [],
    theme: undefined,
    windowSize: {
        width: 0,
        height: 0
    },
    mode: 'dark'
})

export const ThemeProvider = ({ children }: IChildren) => {
    const [theme, setTheme] = React.useState<Theme | undefined>(undefined)
    const [mode, setMode] = React.useState<'dark' | 'light'>('dark')
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const themeFUI = Fui.createTheme()


    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [window.innerWidth, window.innerHeight]);

    React.useEffect(() => {
        setTheme(createTheme({
            palette: {
                mode: mode,
                primary: mode == 'dark' ? '#3D85C6' : themeFUI.palette.neutralLight,
                secondary: mode == 'dark' ? '#1f1f1f' : themeFUI.palette.neutralLighterAlt,
                dark: mode == 'dark' ? '#000' : themeFUI.palette.whiteTranslucent40,
                bubble: mode == 'dark' ? '#2d2d2d' : themeFUI.palette.whiteTranslucent40,
                bgchat: mode == 'dark' ? '#1d1d1d' : themeFUI.palette.whiteTranslucent40,
                bgcolor: mode == 'dark' ? '#1a1a1a' : themeFUI.palette.whiteTranslucent40,
                red: mode == 'dark' ? themeFUI.palette.red : themeFUI.palette.redDark,
                blue: '#3D85C6',
                green: '#4AC959',
                typography: {
                    primary: mode == 'dark' ? '#E1E1E1' : themeFUI.palette.neutralSecondary,
                    secondary: mode == 'dark' ? themeFUI.palette.neutralTertiary : themeFUI.palette.neutralSecondaryAlt,
                }
            },
            shape: {
                borderRadius: .16
            },
            typography: {
                fontFamily: 'Roboto, Sans serif'
            }
        }))
    }, [])
    document.documentElement.style.setProperty('--bg', `${theme?.palette.bgcolor}`);
    document.documentElement.style.setProperty('--dark', `${theme?.palette.dark}ea`);
    document.documentElement.style.setProperty('--darkalt', `${theme?.palette.dark}`);
    document.documentElement.style.setProperty('--shape', `${theme?.shape.borderRadius}rem`);
    return (
        <ThemeContext.Provider value={{ theme, createTheme, windowSize, mode }}>
            {children}
        </ThemeContext.Provider>
    )
}
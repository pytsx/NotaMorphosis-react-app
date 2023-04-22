import React from "react";
import { IChildren } from "../../Types";
import { IThemeContext, Theme } from "./Theme.types";
import createTheme from "./createTheme";
import { NeutralColors } from '@fluentui/theme';
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
                primary: mode == 'dark' ? themeFUI.palette.neutralPrimary : themeFUI.palette.neutralLight,
                secondary: mode == 'dark' ? themeFUI.palette.neutralPrimaryAlt : themeFUI.palette.neutralLighterAlt,
                dark: mode == 'dark' ? themeFUI.palette.neutralDark : themeFUI.palette.whiteTranslucent40,
                red: mode == 'dark' ? themeFUI.palette.red : themeFUI.palette.redDark,
                blue: themeFUI.palette.blue,
                typography: {
                    primary: mode == 'dark' ? themeFUI.palette.neutralLight : themeFUI.palette.neutralSecondary,
                    secondary: mode == 'dark' ? themeFUI.palette.neutralTertiary : themeFUI.palette.neutralSecondaryAlt,
                }
            },
            shape: {
                borderRadius: .16
            },
            typography: {
                fontFamily: 'Segoe UI, Sans serif'
            }
        }))
    }, [])
    document.documentElement.style.setProperty('--bg', `${theme?.palette.primary}`);
    document.documentElement.style.setProperty('--dark', `${theme?.palette.dark}ea`);
    document.documentElement.style.setProperty('--darkalt', `${theme?.palette.dark}`);
    document.documentElement.style.setProperty('--shape', `${theme?.shape.borderRadius}rem`);
    return (
        <ThemeContext.Provider value={{ theme, createTheme, windowSize, mode }}>
            {children}
        </ThemeContext.Provider>
    )
}
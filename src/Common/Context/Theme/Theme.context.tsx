import React from "react";
import { IChildren } from "../../Types";
import { IThemeContext, Theme } from "./Theme.types";
import createTheme from "./createTheme";
import { NeutralColors } from '@fluentui/theme';


export const ThemeContext = React.createContext<IThemeContext>({
    createTheme: (newTheme: {}) => [],
    theme: undefined,
    windowSize: {
        width: 0,
        height: 0
    }
})

export const ThemeProvider = ({ children }: IChildren) => {
    const [theme, setTheme] = React.useState<Theme | undefined>(undefined)
    const [mode, setMode] = React.useState<'dark' | 'light'>('dark')
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

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
                primary: mode == 'dark' ? NeutralColors.gray200 : NeutralColors.gray20,
                secondary: mode == 'dark' ? NeutralColors.gray180 : NeutralColors.gray10,
                typography: {
                    primary: mode == 'dark' ? NeutralColors.gray20 : NeutralColors.gray200,
                    secondary: mode == 'dark' ? NeutralColors.gray10 : NeutralColors.gray190,
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

    return (
        <ThemeContext.Provider value={{ theme, createTheme, windowSize }}>
            {children}
        </ThemeContext.Provider>
    )
}
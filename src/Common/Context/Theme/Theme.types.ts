
export type themeType = {}
export interface IThemeContext {
    createTheme: (newTheme: {}) => themeType
    theme: Theme | undefined
    windowSize: {
        width: number
        height: number
    }
}


// Definindo tipos utilizados pelo theme
export type Breakpoints = {
    [key: string | number]: number;
};
export type typography = {
    [key: string]: string | number | undefined;
}
export type Palette = {
    mode: 'light' | 'dark';
    typography: typography;
    [key: string]: string | number | undefined | {};
};

export type Shape = {
    borderRadius: number;
};

export type Spacing = {
    [key: string]: number;
};

export type Theme = {
    breakpoints: Breakpoints;
    direction: 'ltr' | 'rtl';
    components: Record<string, unknown>;
    palette: Palette;
    spacing: Spacing;
    shape: Shape;
    typography: typography;
};

export type ThemeOptions = {
    breakpoints?: Breakpoints;
    palette?: Palette;
    spacing?: Spacing;
    shape?: Shape;
    typography?: typography;

};
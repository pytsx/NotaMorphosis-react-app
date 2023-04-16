
export type themeType = {}
export interface IThemeContext {
    createTheme: (newTheme: {}) => themeType
    theme: themeType
}


// Definindo tipos utilizados pelo theme
export type Breakpoints = {
    [key: string]: string;
};

export type Palette = {
    mode: 'light' | 'dark';
    [key: string]: string | number | undefined;
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
};

export type ThemeOptions = {
    breakpoints?: Breakpoints;
    palette?: Palette;
    spacing?: Spacing;
    shape?: Shape;
};
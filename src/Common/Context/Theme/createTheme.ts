import { Spacing, Theme, ThemeOptions } from "./Theme.types";
import { createBreakpoints } from "./createBreakpoints";
import { createSpacing } from "./createSpacing";


// Alterando o parâmetro args para um array de Theme
function createTheme<T extends Theme>(options: ThemeOptions = {}): T {
    const {
        breakpoints: breakpointsInput = {},
        palette: paletteInput = {},
        spacing: spacingInput,
        shape: shapeInput = {},
    } = options;

    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput as Spacing);

    const theme: T = {
        breakpoints,
        direction: 'ltr',
        components: {},
        palette: { mode: 'light', ...paletteInput },
        spacing,
        shape: { borderRadius: 4, ...shapeInput },
    } as T;

    console.log(theme);


    return theme;
}

export default createTheme;

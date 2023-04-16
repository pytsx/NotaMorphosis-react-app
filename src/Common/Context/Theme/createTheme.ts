import { Spacing, Theme, ThemeOptions, Breakpoints } from "./Theme.types";
import { createSpacing } from "./createSpacing";
import { breackpointObjVoid, createBreakpoints } from './createBreakpoints'

// Alterando o parâmetro args para um array de Theme
function createTheme<T extends Theme>(options: ThemeOptions = {}): T {

    let breackpointObj: Breakpoints = breackpointObjVoid
    breackpointObj.xs = 500
    breackpointObj.sm = 600
    breackpointObj.md = 900
    breackpointObj.lg = 1200
    breackpointObj.xl = 1400

    const {
        breakpoints: breakpointsInput = breackpointObj,
        palette: paletteInput = {},
        spacing: spacingInput,
        shape: shapeInput = {},
        typography: typographyInput = {},
    } = options;


    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput as Spacing);

    const theme: T = {
        breakpoints,
        direction: 'ltr',
        components: {},
        palette: { mode: 'light', ...paletteInput },
        spacing,
        shape: { borderRadius: .16, ...shapeInput },
        typography: typographyInput
    } as T;



    return theme;
}

export default createTheme;

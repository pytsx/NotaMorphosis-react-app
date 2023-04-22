import { ITheme } from "../../Common/Context/Theme/Theme.types";
import { IChildren } from "../../Common/Types";

export interface IHightLighter extends IChildren {
    fullWidth?: boolean
    hightlight?: boolean
    clickable?: boolean
    isActive?: boolean
    className?: string
    bgcolor?: string
    elevation?: boolean
}

export interface IHightLighterStyle extends IHightLighter, ITheme {
}
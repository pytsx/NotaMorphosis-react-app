import { ReactNode } from "react";
import { Theme } from "../../../Common/Context/Theme/Theme.types";
import { IActive } from "../../../Components/Menu/MenuItem/MenuItem.type";

export interface IMenuLateral extends IActive {
    children?: ReactNode
    width: number
    theme?: Theme
}
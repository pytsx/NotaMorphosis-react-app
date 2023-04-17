import { IChildren } from "../../../Common/Types";
import { IActive } from "../../../Components/Menu/MenuItem/MenuItem.type";

export interface IMenuLateral extends IChildren, IActive {
    width: number
}
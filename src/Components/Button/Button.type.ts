import { Theme } from "../../Common/Context/Theme/Theme.types"
import { IActive } from "../Menu/MenuItem/MenuItem.type"
import { ITypography } from "../Typography/Typography.type"

export interface IButtonStyled extends IActive {
    position?: string
    left?: string
    bottom?: string
    top?: string
    right?: string
    width?: string
    height?: string
    justify?: string
    theme?: Theme
    center?: boolean
    borderColor?: string
    reverse?: boolean
    bgcolor?: string
    elevation?: boolean
    circle?: boolean
}

export interface IButton extends IButtonStyled, ITypography {
    text?: string
    icon?: any
    onClick: () => void
    sx?: {}
}

export interface IButtonComponent extends IButton {

}
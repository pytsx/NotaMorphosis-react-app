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
}

export interface IButton extends IButtonStyled, ITypography {
    text: string
    onClick: () => void
    sx?: {}
}

export interface IButtonComponent extends IButton {

}
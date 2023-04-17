import { ReactNode } from "react"

export interface ITypography {
    children?: ReactNode
    size?: string
    family?: string
    weight?: number
    variant?: string
    p?: number
    lineHeight?: string
    color?: string
    letterSpace?: string
    text?: string
    sx?: {}
    display?: string
    wrap?: string
}
export interface ITypographyStyled extends ITypography {

}
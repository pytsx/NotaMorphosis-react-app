import { noteType } from "../../../Common/Context/Notes/Notes.types"
import { Theme } from "../../../Common/Context/Theme/Theme.types"



export interface IMenuItemContainer {
    icon?: number,
    id?: number | string,
    color?: string,
    label?: string
}

export interface IMenuItem extends IMenuItemContainer {
    isActive: boolean
    handleClick: (id: string) => void
    onContextMenu: (e: any) => void
    contextMenuActive: boolean
}

export interface IActive {
    isActive?: boolean
}

export interface IMenuItemWrapperStyled extends IActive {
    theme: Theme
}
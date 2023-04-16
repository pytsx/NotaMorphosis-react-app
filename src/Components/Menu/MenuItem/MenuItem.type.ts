import { noteType } from "../../../Common/Context/Notes/Notes.types"
import { Theme } from "../../../Common/Context/Theme/Theme.types"



export interface IMenuItemContainer {
    value: noteType
    icon?: any
    id?: number | string
}

export interface IMenuItem extends IMenuItemContainer {
    isActive: boolean
    handleClick: (e: noteType) => void
    onContextMenu: (e: any) => void
    contextMenuActive: boolean
}

export interface IActive {
    isActive?: boolean
}

export interface IMenuItemWrapperStyled extends IActive {
    theme: Theme
}
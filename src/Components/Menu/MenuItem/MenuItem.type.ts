import { noteType } from "../../../Common/Context/Notes/Notes.types"



export interface IMenuItemContainer {
    value: noteType
    icon?: any
    id?: number | string
}

export interface IMenuItem extends IMenuItemContainer {
    isActive: boolean
    handleClick: (e: noteType) => void
}

export interface IActive {
    isActive?: boolean
}
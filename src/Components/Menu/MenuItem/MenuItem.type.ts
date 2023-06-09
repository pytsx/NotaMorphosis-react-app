import { Theme } from "../../../Common/Context/Theme/Theme.types"
import { menuPropsType } from "../Menu.types"



export interface IMenuItem extends menuPropsType {
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
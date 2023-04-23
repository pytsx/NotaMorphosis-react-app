import { MenuComponent } from "./Menu"

import { IMenu } from "./Menu.types"


export const Menu = ({ ...rest }: IMenu) => {

    return (
        <MenuComponent {...rest} />
    )
}
import { MenuComponent } from "./Menu"

import { IMenu } from "./Menu.types"


export const Menu = ({ values }: IMenu) => {


    return (
        <MenuComponent values={values} />
    )
}
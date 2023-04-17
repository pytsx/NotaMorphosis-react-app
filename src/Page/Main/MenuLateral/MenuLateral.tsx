
import { MenuLateralStyled } from "./MenuLateral.styled"
import { IMenuLateral } from "./MenuLateral.types"

export const MenuLateral = ({ children, isActive, width }: IMenuLateral) => {


    return (
        <MenuLateralStyled
            direction="column"
            style={{
                opacity: isActive ? 1 : 0,
            }}
            isActive={isActive}
            height="100%"
            width={isActive ? `${width}px` : '0px'}
        >
            {children}
        </MenuLateralStyled>
    )
}
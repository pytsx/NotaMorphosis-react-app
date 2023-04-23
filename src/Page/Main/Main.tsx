import { useTheme } from "../../Common/Context/Theme"
import { Board, Chat } from "../../Components"
import { MainContainerStyled } from "./Main.styled"
import { MenuLeft, MenuRight } from "./MenuLateral"
import React from "react"
import { useNotes } from "../../Common/Context"

export const MainPage = () => {
    const { theme, windowSize } = useTheme()
    const { currentTask } = useNotes()

    const [menuLeft, setMenuLeft] = React.useState<boolean>(true)
    const [menuRight, setMenuRight] = React.useState<boolean>(!!currentTask)
    let menuLateralWidth = 280

    const [open, setOpen] = React.useState<boolean>()
    React.useEffect(() => {
        setMenuRight(!!currentTask)
        // setMenuLeft(!!!currentTask)
    }, [currentTask])
    React.useEffect(() => {
        if (Number(theme?.breakpoints.md) >= windowSize.width) {
            setMenuRight(false)
            setMenuLeft(false)
        } else {
            setMenuRight(false)
            setMenuLeft(true)
        }
    }, [windowSize])

    return (
        <MainContainerStyled style={{ background: `${theme?.palette.secondary}` }}>
            <MenuLeft width={menuLateralWidth} isActive={menuLeft} theme={theme} />
            <Board width={
                menuRight && !menuLeft
                    ? menuLateralWidth
                    : menuLeft && !menuRight
                        ? menuLateralWidth
                        : menuLeft && menuRight
                            ? menuLateralWidth * 2
                            : 0
            } />
            <MenuRight width={menuLateralWidth} isActive={menuRight} theme={theme} />
        </MainContainerStyled >
    )
}
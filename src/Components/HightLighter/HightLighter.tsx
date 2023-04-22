import { useTheme } from "../../Common/Context"
import { HightLighterWrapper } from "./HightLighter.styled"
import { Theme } from "../../Common/Context/Theme/Theme.types"
import { IHightLighter } from "./HightLighter.types"
import React from "react"

export const HightLigter = ({ children, bgcolor, className, fullWidth, hightlight = true, clickable = false, isActive }: IHightLighter) => {
    const { theme } = useTheme()
    const [active, setActive] = React.useState<boolean>(false)
    const handleActive = () => {
        if (clickable) {
            setActive(prev => !prev)
        }
    }
    return (
        <HightLighterWrapper
            className={className}
            hightlight={hightlight}
            fullWidth={fullWidth}
            isActive={isActive ? isActive : active}
            onClick={handleActive}
            onBlur={handleActive}
            theme={theme as Theme}
            bgcolor={bgcolor}
        >
            {children}
        </HightLighterWrapper>
    )
}
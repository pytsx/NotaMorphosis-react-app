import { useTheme } from "../../Common/Context"
import { HightLighterWrapper } from "./HightLighter.styled"
import { Theme } from "../../Common/Context/Theme/Theme.types"
import { IHightLighter } from "./HightLighter.types"
import React from "react"

export const HightLigter = ({ children, hightlight = true, clickable = false, elevation = false, ...rest }: IHightLighter) => {
    const { theme } = useTheme()
    const [active, setActive] = React.useState<boolean>(false)

    const handleActive = () => {
        if (clickable) {
            setActive(prev => !prev)
        }
    }

    return (
        <HightLighterWrapper
            elevation={elevation}
            theme={theme as Theme}
            isActive={active}
            clickable={clickable}
            hightlight={hightlight}
            {...rest}
        >
            {children}
        </HightLighterWrapper>
    )
}
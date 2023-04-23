import React from "react"
import { Button } from "../Button"
import { Stack } from "../Stack"
import { IChildren } from "../../Common/Types"
import { useTheme } from "../../Common/Context"

export interface IFab extends IChildren {
    icon_open?: JSX.Element | number
    icon_close?: JSX.Element | number
    text_open?: string
    text_close?: string
    handleClick: () => void
}

export const Fab = ({ icon_open, handleClick, icon_close, text_close, text_open, children }: IFab) => {
    const { theme } = useTheme()
    const [isActive, setIsActive] = React.useState<boolean>(false)
    const handleActive = () => {
        setIsActive(prev => !prev)
        handleClick()
    }
    const S = (s?: string) => {
        return String(s)
    }
    return (
        <Stack
            align="center"
            justify="center"
            direction="row"
            width="fit-content"
            height="100%"
        >
            <Button
                bgcolor={`${theme?.palette.secondary}`}
                icon={isActive && !!icon_open && !!icon_close ? icon_close : icon_open}
                text={isActive && !!text_open && !!text_close ? S(text_close) : S(text_open)}
                onClick={handleActive}
            />
            {children}
        </Stack>
    )
}
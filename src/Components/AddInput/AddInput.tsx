import React from "react"
import { Stack } from "../Stack"
import { Typography } from "../Typography"
import { AddInputStyled } from "./AddInput.styled"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { MdAdd } from 'react-icons/md'
import { useTheme } from "../../Common/Context/Theme"

export interface IAddInput {
    color: string
    background?: string
    placeholder?: string,
    onChange: (e: string) => void
    value: string
    disabled?: boolean
}


export const AddInput = ({ color, background, placeholder, onChange, value, disabled = false }: IAddInput) => {
    const { theme } = useTheme()
    const borderRadius = `${theme?.shape.borderRadius}rem`;
    const [focus, setFocus] = React.useState<boolean>(false)
    const [hover, setHover] = React.useState<boolean>(false)
    let primaryColor = '#c9c9c9' + '16'
    let secondaryColor = '#c9c9c9' + '0a'
    const handleHover = () => {
        if (!!!background) {
            setHover(prev => !prev)
        } else {
        }
    }
    return (
        <Stack
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            width="100%"
            position="relative"
            align="center"
            justify="center"
            style={{
                background: hover || focus && !!!background ? primaryColor : !!background ? background : secondaryColor,
                borderRadius: borderRadius,
                padding: '0 .8rem',
                transition: 'all 100ms ease-in-out'
            }}>
            <Stack
                width="fit-content"
                height="100%"
                align="center"
                justify="center">
                <Typography variant="h2" color={color}>
                    {
                        focus
                            ? <RiCheckboxBlankCircleLine />
                            : <MdAdd />
                    }
                </Typography>
            </Stack>
            <AddInputStyled
                disabled={disabled}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                color={color}
                value={value}
                placeholder={focus ? '' : placeholder}
                style={{
                    borderRadius: borderRadius
                }}
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
            >

            </AddInputStyled>

        </Stack >
    )
}
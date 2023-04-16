import React from "react"
import { Stack } from "../../Stack"
import { Typography } from "../../Typography"
import { AddInputStyled } from "./AddInput.styled"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { MdAdd } from 'react-icons/md'

export interface IAddInput {
    color: string
}


export const AddInput = ({ color }: IAddInput) => {
    const [focus, setFocus] = React.useState<boolean>(false)
    const [hover, setHover] = React.useState<boolean>(false)
    let primaryColor = '#c9c9c9' + '16'
    let secondaryColor = '#c9c9c9' + '0a'
    return (
        <Stack
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            width="100%"
            position="relative"
            align="center"
            justify="center"
            style={{
                background: hover || focus ? primaryColor : secondaryColor,
                borderRadius: '.16rem',
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
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
            >

            </AddInputStyled>
            <Stack
                align="center"
                position="absolute"
                width="fit-content"
                style={{
                    left: '3rem',
                    display: !focus ? 'inline' : 'none',
                }}>
                <Typography color={color} variant="h5" weight={400} >
                    Adicionar uma tarefa
                </Typography>
            </Stack>
        </Stack>
    )
}
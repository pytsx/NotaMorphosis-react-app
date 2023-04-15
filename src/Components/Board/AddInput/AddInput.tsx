import React from "react"
import { Stack } from "../../Stack"
import { Typography } from "../../Typography"
import { AddInputStyled } from "./AddInput.styled"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { MdAdd } from 'react-icons/md'

export const AddInput = () => {
    const [focus, setFocus] = React.useState<boolean>(false)
    const [hover, setHover] = React.useState<boolean>(false)
    return (
        <Stack
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            width="100%"
            position="relative"
            align="center"
            justify="center"
            style={{
                background: hover || focus ? '#c9c9c932' : '#c9c9c90f',
                borderRadius: '.16rem',
                padding: '0 .8rem',
                transition: 'all 100ms ease-in-out'
            }}>
            <Stack width="fit-content" height="100%" align="center" justify="center">
                <Typography variant="h1">
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
                <Typography variant="h5" weight={400} >
                    Adicionar uma tarefa
                </Typography>
            </Stack>
        </Stack>
    )
}
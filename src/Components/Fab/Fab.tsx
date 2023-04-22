import React from "react"
import { Button } from "../Button"
import { Stack } from "../Stack"
import { Chat } from "../Chat"
import { useTheme } from "../../Common/Context"

export const Fab = () => {
    const { theme } = useTheme()
    const [isActive, setIsActive] = React.useState<boolean>(false)
    const handleActive = () => {
        setIsActive(prev => !prev)
    }
    return (
        <Stack
            align="center"
            justify="center"
            direction="row"
            width="fit-content"
            height="100%"
            position="fixed"
            style={{
                right: isActive ? 0 : '-1rem',
                bottom: 0,
            }}>
            <Button text={isActive ? ">" : "<"} onClick={handleActive} />
            <Stack
                width={isActive ? '320px' : '0px'}
                height="100%"
                align="end"
                style={{
                    transition: 'all 300ms ease-in-out',
                    background: `${theme?.palette.secondary}`,
                    backdropFilter: 'blur(29px)'

                }}>

                <Chat width="100%" messages={[]} />

            </Stack>

        </Stack>
    )
}
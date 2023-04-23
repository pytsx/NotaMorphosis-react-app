import React from "react"
import { useNavigate } from "../../Common/Context"
import { useTheme } from "../../Common/Context/Theme"
import { Theme } from "../../Common/Context/Theme/Theme.types"
import { IChildren } from "../../Common/Types"
import { Chat, Fab, Stack } from "../../Components"
import { LayoutContainer } from "./Layout.styled"



export const Layout = ({ children }: IChildren) => {
    const { theme } = useTheme()
    const { currentPage } = useNavigate()
    const [isActive, setIsActive] = React.useState<boolean>(false)

    let FAB_WIDTH = '400px'
    const handleClick = () => {
        setIsActive(prev => !prev)
    }
    return (
        <LayoutContainer style={{ position: currentPage != 3 ? 'fixed' : 'relative' }} theme={theme as Theme}>
            <Stack
                align="center"
                justify="center"
                width='100%'
                position="relative"
                style={{
                    transition: 'all 300ms ease-in-out',
                    marginLeft: isActive ? `-${FAB_WIDTH}` : '0px',
                    filter: isActive ? 'grayscale(100%)' : ''

                }}
                height="100%">
                {children}
            </Stack>
            <Stack position="fixed" width="fit-content" height="100%" style={{ right: isActive ? '0' : '-1.2rem' }}>

                <Fab handleClick={handleClick} text_open="<" text_close=">" >
                    <Stack
                        width={isActive ? FAB_WIDTH : '0px'}
                        height="100%"
                        align="end"
                        style={{
                            transition: 'all 300ms ease-in-out',
                            background: `${theme?.palette.secondary}`,
                            backdropFilter: 'blur(29px)'
                        }}>


                        <Chat width="100%" messages={[]} />

                    </Stack>
                </Fab>
            </Stack>
        </LayoutContainer>
    )
}
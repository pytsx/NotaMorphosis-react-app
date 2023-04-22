import React from "react"
import { HightLigter } from "../HightLighter"
import { BubbleWrapper } from "./Bubble.styled"
import { IBubble } from "./Bubble.types"
import { Typing } from "../Typing"
import { Stack } from "../Stack"
import { useTheme } from "../../Common/Context"

export const Bubble = ({ label, onComplete, className, sender }: IBubble) => {
    const [hover, setHover] = React.useState<boolean>(false)
    const { theme } = useTheme()
    const handleHover = () => {
        setHover(prev => !prev)
    }
    let transformOrigin = sender == 'user' ? 'right bottom' : 'left bottom'
    document.documentElement.style.setProperty('--appear-origin', transformOrigin)
    return (
        <HightLigter className={className}  >
            <BubbleWrapper

                onMouseLeave={handleHover}
                onMouseEnter={handleHover}
                height="100%"
                position="relative"
                direction={sender == 'system' ? 'row' : 'row-reverse'}
                align="center"
                justify="start">

                <div
                    style={{
                        width: '1px',
                        transform: hover ? 'scaleY(2)' : 'scaleY(1)',
                        transition: 'all 50ms ease-in-out',
                        alignItems: 'center',
                        marginLeft: sender == 'system' ? '1.6rem' : '',
                        marginRight: sender == 'user' ? '1.6rem' : '',
                        borderRight: hover ? '1px solid #fafafa32' : '1px solid #fafafa24',
                        color: 'transparent'
                    }}>
                    .
                </div>
                <Stack align="baseline" style={{ margin: '1rem' }}>
                    <Typing
                        color={`${theme?.palette.typography.secondary}`}
                        text={label as string}
                        delay={40}
                        variant="p"
                        weight={600}
                        justify={sender == 'user' ? 'right' : 'left'}
                        onComplete={() => onComplete()} />

                </Stack>
            </BubbleWrapper>
        </HightLigter>
    )
}
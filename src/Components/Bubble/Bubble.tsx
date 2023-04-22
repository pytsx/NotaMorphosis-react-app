import React from "react"
import { HightLigter } from "../HightLighter"
import { BubbleWrapper } from "./Bubble.styled"
import { IBubble } from "./Bubble.types"
import { Typing } from "../Typing"
import { Stack } from "../Stack"
import { useTheme } from "../../Common/Context"

export const Bubble = ({ label, onComplete, className, sender }: IBubble) => {
    const { theme } = useTheme()

    const [hover, setHover] = React.useState<boolean>(false)
    const [isComplete, setIsComplete] = React.useState<boolean>(false)

    const handleHover = () => {
        setHover(prev => !prev)
    }

    const handleComplete = () => {
        onComplete()
        setIsComplete(true)
    }

    let transformOrigin = sender == 'user' ? 'right bottom' : 'left bottom'

    document.documentElement.style.setProperty('--appear-origin', transformOrigin)

    return (
        <Stack
            width='90%'
            style={{
                transition: 'all 200ms ease-in-out',
                transform: isComplete ? 'scale(1)' : 'scale(1.032)',
                filter: !isComplete ? 'brightness(108%)' : 'brightness(100%)',
                boxShadow: !isComplete ? '0px 0px 20px -10px #1d1d1d' : 'none'
            }}>

            <HightLigter bgcolor={`${theme?.palette.bubble}`} fullWidth className={className}  >
                <BubbleWrapper
                    onMouseLeave={handleHover}
                    onMouseEnter={handleHover}
                    height="100%"
                    position="relative"
                    direction={sender == 'user' ? 'row' : 'row-reverse'}
                    align="center"
                    justify="start">

                    <div
                        className='typing'
                        style={{
                            width: '1px',
                            height: '100%',
                            transform: hover ? 'scaleY(1.5)' : 'scaleY(1)',
                            opacity: hover ? 1 : .6,
                            transition: 'all 200ms ease-in-out',
                            alignItems: 'center',
                            marginLeft: sender == 'user' ? '1.6rem' : '',
                            marginRight: sender == 'system' ? '1.6rem' : '',
                            borderRight: hover ? '1px solid #fafafa32' : '1px solid #fafafa24',
                            color: 'transparent'
                        }}>
                        .
                    </div>
                    <Stack align="baseline" style={{ margin: '1rem' }}>
                        <Typing
                            color={`${theme?.palette.typography.primary}`}
                            text={label as string}
                            delay={sender == 'user' ? 0 : 30}
                            variant="p"
                            weight={400}
                            justify={sender == 'user' ? 'left' : 'left'}
                            onComplete={() => handleComplete()} />

                    </Stack>
                </BubbleWrapper>
            </HightLigter>
        </Stack>
    )
}
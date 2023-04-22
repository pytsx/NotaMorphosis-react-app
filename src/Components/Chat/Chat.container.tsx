import React from "react"
import { useTheme } from "../../Common/Context"
import { AddInput } from "../AddInput"
import { BubbleFeed } from "../BubbleFeed"
import { Stack } from "../Stack"

interface IChat {
    messages?: {
        sender: string
        message: string
    }[]
    placeholder?: string
}
export const Chat = ({ messages, placeholder = 'o que está pensando?' }: IChat) => {
    const { theme } = useTheme()

    const [inputValue, setInputValue] = React.useState<string>('')
    const [messagesFeed, setMessagesFeed] = React.useState<any[] | undefined>(messages)

    const handleInput = (value: string) => {
        setInputValue(value)
    }

    return (

        <Stack
            align="center"
            justify="center"
            width="600px"
            style={{
                background: 'transparent',
                zIndex: 10000,
                boxShadow: `0px 0px 4px  #00000064`
            }}>

            <Stack
                direction="column"
                padding='.8rem 1.6rem .4rem 1.6rem'
                style={{
                    background: `${theme?.palette.dark}ae`,
                    backdropFilter: 'blur(30px)',
                    borderRadius: `${theme?.shape.borderRadius}rem`,

                }}>
                <BubbleFeed
                    messages={messagesFeed as any[]}
                />
                <AddInput
                    hightlight={false}
                    clickable={false}
                    color={`${theme?.palette.typography.secondary}`}
                    placeholder={placeholder}
                    onChange={handleInput}
                    value={inputValue}
                />
            </Stack>
        </Stack>
    )
}
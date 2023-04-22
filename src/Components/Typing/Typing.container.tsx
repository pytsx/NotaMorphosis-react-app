import React, { useEffect } from "react"
import { TypingComponent } from "./Typing"
import { ITyping } from "./Typing.types"

export const Typing = ({ delay, text, onComplete, ...rest }: ITyping) => {

    const [currentText, setCurrentText] = React.useState<string>('')
    const [currentIndex, setCurrentIndex] = React.useState<number>(0)

    React.useEffect(() => {
        const typingInterval = setInterval(() => {
            setCurrentIndex(prev => prev += 1)
        }, delay)



        return () => clearInterval(typingInterval)
    }, [delay])

    useEffect(() => {
        setCurrentText(text?.substring(0, currentIndex))
        if (text?.length == currentIndex) {
            onComplete()
        }

    }, [text, currentIndex])


    return (
        <TypingComponent {...rest} text={delay == 0 ? text : currentText} />
    )
}



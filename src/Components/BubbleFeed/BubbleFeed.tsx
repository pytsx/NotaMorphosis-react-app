import React from "react"
import { IBubbleFeed } from "./BubbleFeed.types"
import { Bubble } from "../Bubble/Bubble"
import { Stack } from "../Stack"

export const BubbleFeed = ({ messages }: IBubbleFeed) => {

    const [currentIndex, setCurrentIndex] = React.useState<number>(0)
    const [bubbles, setBubbles] = React.useState<{ sender: string, message: string }[]>([messages[0]])

    const handleBubbleTypingComplete = () => {
        setTimeout(() => {
            setCurrentIndex(prev => prev == messages.length ? prev : prev += 1)
        }, 300)
    }

    React.useEffect(() => {
        setBubbles(prev => !prev.includes(messages[currentIndex]) ? [...prev, messages[currentIndex]] : prev)
        setBubbles(prev => prev.filter(i => i))
    }, [currentIndex])
    return (
        <Stack direction="column" width="100%" >
            {
                bubbles?.map((bubble, index) => (
                    <Stack style={{ marginTop: '.16rem', marginBottom: '.16rem' }} justify={bubble?.sender == 'user' ? "end" : 'start'} width="100%">
                        <Bubble sender={bubble.sender} className="appear" label={bubble?.message} key={bubble?.message} onComplete={handleBubbleTypingComplete} />
                    </Stack>
                ))
            }
        </Stack>
    )
}
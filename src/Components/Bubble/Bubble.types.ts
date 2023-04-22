export interface IBubble {
    label?: string
    sender?: string
    onComplete: () => void
    isComplete?: boolean
    className?: string
}
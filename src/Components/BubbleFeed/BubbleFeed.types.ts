export interface IBubbleFeed {
    messages: {
        sender: string,
        message: string
    }[]
}

export interface IBubbleFeedComponent {
    onComplete: () => void

}
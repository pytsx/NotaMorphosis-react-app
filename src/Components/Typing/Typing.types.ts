import { ITypography } from "../Typography/Typography.type"

export interface ITypingComponent extends ITypography {
    text: string
}

export interface ITyping extends ITypingComponent {
    delay: number
    onComplete: () => void
}



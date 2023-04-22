import { Typography } from "../Typography"
import { ITypingComponent } from "./Typing.types"

export const TypingComponent = ({ text, ...rest }: ITypingComponent) => {
    return (
        <Typography justify='start' lineHeight="1.2" letterSpace=".032rem" wrap="wrap"  {...rest}>{text}</Typography>
    )
}
import { Typography } from "../Typography"
import { AvatarContainerStyled, AvatarStyled } from "./Avatar.styled"
import { IAvatar } from "./Avatar.types"


export const Avatar = ({ letter, color }: IAvatar) => {
    return (
        <AvatarContainerStyled>
            <AvatarStyled style={{ background: color }} >
                <Typography variant="h3" weight={400}>
                    {letter}
                </Typography>
            </AvatarStyled>
        </AvatarContainerStyled>
    )
}
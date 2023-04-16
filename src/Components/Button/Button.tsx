import { Stack } from "../Stack"
import { Typography } from "../Typography"
import { ButtonStyled } from "./Button.styled"
import { IButton } from "./Button.type"

export const Button = ({ onClick, text, position, left, right, bottom, top, width, sx, variant, height, justify }: IButton) => (
    <ButtonStyled
        height={height}
        style={sx}
        width={width}
        position={position}
        left={left}
        right={right}
        bottom={bottom}
        top={top}
        onClick={() => onClick()}
    >
        <Stack
            align="center"
            justify={justify ? justify : 'space-between'}
            height={height}
            width={width}
        >
            <Typography variant={variant}>
                {text}
            </Typography>
        </Stack>
    </ButtonStyled>
)
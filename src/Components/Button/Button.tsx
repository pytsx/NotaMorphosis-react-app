import { useTheme } from "../../Common/Context/Theme"
import { Stack } from "../Stack"
import { Typography } from "../Typography"
import { ButtonStyled } from "./Button.styled"
import { IButton } from "./Button.type"

export const Button = ({
    onClick,
    text,
    position,
    left,
    right,
    bottom,
    top,
    width,
    sx,
    variant = 'h5',
    height,
    justify,
    icon
}: IButton) => {
    const { theme } = useTheme()
    return (
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
            theme={theme}
        >
            <Stack
                align="center"
                justify={justify ? justify : 'start'}
                height={height}
                width={width}
                direction="row"
            >
                <div style={{ width: 'fit-content', padding: '.4rem', display: icon ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center' }}>

                    <Typography variant="h2">
                        {icon}
                    </Typography>
                </div>
                <div style={{ width: '100%', padding: '.4rem', display: text ? 'flex' : 'none', alignItems: 'center', justifyContent: 'start' }}>
                    <Typography variant={variant}>
                        {text}
                    </Typography>
                </div>
            </Stack>
        </ButtonStyled>
    )
}
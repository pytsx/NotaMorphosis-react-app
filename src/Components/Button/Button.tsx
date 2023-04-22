import { generateIcon } from "../../Common/Context"
import { useTheme } from "../../Common/Context/Theme"
import { HightLigter } from "../HightLighter"
import { Stack } from "../Stack"
import { Typography } from "../Typography"
import { ButtonStyled } from "./Button.styled"
import { IButton } from "./Button.type"

export const Button = ({
    onClick,
    text,
    variant = 'h5',
    center = false,
    justify,
    icon,
    color,
    borderColor = 'transparent',
    reverse,
    bgcolor,
    circle,
    ...rest
}: IButton) => {
    const { theme } = useTheme()
    return (

        <HightLigter borderRadius={circle ? '50rem' : `${theme?.shape.borderRadius}rem`} {...rest} bgcolor={bgcolor}>
            <ButtonStyled
                {...rest}
                onClick={() => onClick()}
                theme={theme}
                style={{ border: `1px solid ${borderColor}` }}
            >
                <Stack
                    gap="0"
                    height="100%"
                    align="center"
                    justify={justify ? justify : 'start'}
                    direction={reverse ? "row-reverse" : 'row'}
                >
                    <div
                        style={{
                            width: 'fit-content',
                            height: '100%',
                            padding: '0rem .2rem',
                            display: icon ? 'flex' : 'none',
                        }}>

                        <Typography variant={variant}>
                            {typeof icon == 'number' ? generateIcon(icon) : icon}
                        </Typography>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            padding: ' .4rem  .2rem',
                            display: text ? 'flex' : 'none',
                            alignItems: 'center',
                            justifyContent: center ? 'center' : 'start'
                        }}>
                        <Typography weight={200} color={color ? color : `${theme?.palette.typography.primary}`} variant={variant}>
                            {text}
                        </Typography>
                    </div>
                </Stack>
            </ButtonStyled>
        </HightLigter>
    )
}
import { useTheme } from "../../../Common/Context"
import { Stack, Typography } from "../../../Components"

export const Logo = () => {
    const { theme } = useTheme()
    return (
        <Stack
            align="center"
            justify="center"
            height="50px"
            width="100%"
            position="fixed"
            style={{
                background: 'transparent',
                zIndex: 10000,
                top: 4
            }}>
            <div
                style={{
                    width: 'fit-content',
                    background: `${theme?.palette.dark}af`,
                    borderRadius: '50rem',
                    backdropFilter: 'blur(10px)'
                }}>
                <Typography weight={400} color={`${theme?.palette.typography.secondary}`} variant="h2" padding=".6rem 1.2rem">
                    NotaMorphosis
                </Typography>
            </div>
        </Stack>
    )
}
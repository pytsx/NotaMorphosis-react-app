import { SlArrowRight } from "react-icons/sl"
import { HightLigter, Stack, Typography } from "../../../Components"
import { useNavigate, useTheme } from "../../../Common/Context"

export const ActionButton = () => {
    const { theme } = useTheme()
    const { navigate } = useNavigate()
    return (
        <Stack onClick={() => navigate(3)} position="fixed" width="fit-content" style={{ right: -12 }} >
            <HightLigter clickable bgcolor={`${theme?.palette.dark}`}>
                <Stack align="center" justify="center" padding='.8rem '>
                    <Typography color={`${theme?.palette.typography.secondary}`}>
                        <SlArrowRight />
                    </Typography>
                </Stack>
            </HightLigter>
        </Stack>
    )
}
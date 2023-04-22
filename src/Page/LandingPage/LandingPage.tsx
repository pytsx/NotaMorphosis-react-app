import { useNavigate, useTheme } from "../../Common/Context"
import { Chat, Stack, Typography } from "../../Components"
import { Circles } from "./Circles"
import { Logo } from "./Logo"
import { ActionButton } from "./ActionButton"
import { LandingPageWrapper } from "./LandingPage.styled"
import { Theme } from "../../Common/Context/Theme/Theme.types"
import { Button } from "../../Components/Button"
let mensagens = [
    {
        sender: 'user',
        message: 'Com a ajuda da nossa IA, você pode obter sugestões personalizadas de como priorizar suas tarefas, estimativas de tempo para concluí-las e até mesmo lembretes inteligentes para garantir que você não se esqueça de nada importante.'
    },
    {
        sender: 'system',
        message: 'Além disso, nosso site é fácil de usar e possui uma interface intuitiva para que você possa começar a usar imediatamente.Então, se você está procurando uma maneira mais inteligente de gerenciar suas tarefas diárias, experimente nosso site de lista de tarefas com inteligência artificial agora mesmo!'
    }
]
export const LandingPageComponent = () => {
    const { theme } = useTheme()
    const { navigate } = useNavigate()
    return (
        <LandingPageWrapper theme={theme as Theme}>
            {/* <Logo /> */}
            <Circles />
            <Stack height="50vh" align="center" justify="start" direction="column" >
                <Typography color="#fafafa16" weight={800} p={100} margin="2rem 0rem" variant="h1">NotaMorphosis</Typography>
                <Stack style={{ transform: 'skew(-8deg)' }} align="center" width="fit-content">
                    <Button onClick={() => navigate(3)} bgcolor={`${theme?.palette.green}`} icon={1} width="fit-content" text="get start" />
                    <Button elevation onClick={() => navigate(2)} bgcolor={`${theme?.palette.blue}`} reverse width="fit-content" text="acessar" />
                </Stack>
            </Stack>
            <Stack direction="column" width="100%" align="center" justify="center" position="fixed" style={{ bottom: 0 }}>
                <Chat placeholder="digite seu username..." messages={mensagens} />
            </Stack>
        </LandingPageWrapper >
    )
}
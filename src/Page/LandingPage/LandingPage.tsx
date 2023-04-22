import { useTheme } from "../../Common/Context"
import { Chat, Stack } from "../../Components"
import { Circles } from "./Circles"
import { Logo } from "./Logo"
import { ActionButton } from "./ActionButton"
import { LandingPageWrapper } from "./LandingPage.styled"
import { Theme } from "../../Common/Context/Theme/Theme.types"
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
    return (
        <LandingPageWrapper theme={theme as Theme}>
            <Logo />
            <Circles />
            <Stack width="100%" align="center" justify="center" position="fixed" style={{ bottom: 0 }}>
                <Chat placeholder="digite seu username..." messages={mensagens} />
            </Stack>
            <ActionButton />
        </LandingPageWrapper>
    )
}
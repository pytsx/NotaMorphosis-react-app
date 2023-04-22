import { useNavigate } from "../../Common/Context"
import { useTheme } from "../../Common/Context/Theme"
import { Theme } from "../../Common/Context/Theme/Theme.types"
import { IChildren } from "../../Common/Types"
import { AddInput, Chat, Fab, Stack } from "../../Components"
import { LayoutContainer } from "./Layout.styled"



export const Layout = ({ children }: IChildren) => {
    const { theme } = useTheme()
    const { currentPage } = useNavigate()
    return (
        <LayoutContainer style={{ position: currentPage != 3 ? 'fixed' : 'relative' }} theme={theme as Theme}>
            {children}
            <Fab />
        </LayoutContainer>
    )
}
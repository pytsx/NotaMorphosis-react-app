import { useTheme } from "../../Common/Context/Theme"
import { Theme } from "../../Common/Context/Theme/Theme.types"
import { IChildren } from "../../Common/Types"
import { LayoutContainer } from "./Layout.styled"



export const Layout = ({ children }: IChildren) => {
    const { theme } = useTheme()
    return (
        <LayoutContainer theme={theme as Theme}>
            {children}
        </LayoutContainer>
    )
}
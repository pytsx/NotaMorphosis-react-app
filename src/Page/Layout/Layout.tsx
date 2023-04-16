import { useTheme } from "../../Common/Context/Theme"
import { IChildren } from "../../Common/Types"
import { LayoutContainer } from "./Layout.styled"



export const Layout = ({ children }: IChildren) => {
    const { theme } = useTheme()
    return (
        <LayoutContainer style={{ background: theme?.palette.secondary }}>
            {children}
        </LayoutContainer>
    )
}
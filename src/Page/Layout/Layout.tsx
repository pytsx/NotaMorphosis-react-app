import { IChildren } from "../../Common/Types"
import { LayoutContainer } from "./Layout.styled"

export const gray200 = '#1b1a19'
export const gray180 = '#252423'

export const Layout = ({ children }: IChildren) => {

    return (
        <LayoutContainer style={{ background: gray180 }}>
            {children}
        </LayoutContainer>
    )
}
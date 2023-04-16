import styled from "@emotion/styled";
import { Theme } from "../../Common/Context/Theme/Theme.types";

export interface ILayoutContinaer {
    theme: Theme
}
export const LayoutContainer = styled.div<ILayoutContinaer>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: ${props => String(props?.theme?.palette?.primary)}
`
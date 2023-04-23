import styled from "@emotion/styled";
import { Theme } from "../../Common/Context/Theme/Theme.types";
import { Stack } from "../../Components";

export interface ILayoutContinaer {
    theme: Theme
}
export const LayoutContainer = styled(Stack) <ILayoutContinaer>`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: ${props => String(props?.theme?.palette?.bgcolor)};
`
import styled from "@emotion/styled";
import { ITheme } from "../../Common/Context/Theme/Theme.types";

export const LandingPageWrapper = styled.div<ITheme>`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    background: ${props => props?.theme?.palette?.bgcolor};
`
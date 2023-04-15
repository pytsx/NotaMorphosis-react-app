import styled from "@emotion/styled";
import { Input } from "../Input";



export const SearchInputStyled = styled(Input)`
    width: 100%;
    border-radius: .16rem;
    border: 1px solid #c9c9c916;
    border-bottom:  1px solid #c9c9c9;
    padding: .4rem .64rem;
    color: #c9c9c9;
    user-select: none;
    transition: all 100ms ease-in-out;
    &:focus {
        border-bottom:  1px solid #87CEFA8f;
        box-shadow: inset 0px -1.5px 0px #87CEFA8f;
    }
    
`
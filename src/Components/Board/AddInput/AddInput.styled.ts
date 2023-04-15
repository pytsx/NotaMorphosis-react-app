import styled from "@emotion/styled";
import { Input } from "../../Input";

export const AddInputStyled = styled(Input)`
    width: 100%;
    border-radius: .16rem;
    padding: .8rem;
    color: #c9c9c9af;
    font-size: 16px;
    border: 1px solid transparent;
    &::placeholder {
        font-size: 24px;
    }
    &:focus{
    }
`
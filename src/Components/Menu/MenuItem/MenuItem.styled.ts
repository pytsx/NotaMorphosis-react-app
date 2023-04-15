import styled from "@emotion/styled";
import { IActive } from "./MenuItem.type";

export const MenuItemStyled = styled.li<IActive>`
    padding: .64rem .64rem;
    margin-top: .2rem;
    border-radius: .16rem;
    list-style: none;
    display: flex;
    align-item: center;
    justify-content: start;
    position: relative;
    cursor: ${props => props.isActive ? 'default' : 'pointer'};
    background: ${props => props.isActive ? '#Fafafa24' : 'transparent'};
    user-select:none;
    &:hover{
        background: #Fafafa24;
    }
`
export const MenuItemActiveIndicator = styled.span<IActive>`
    opacity: ${props => props.isActive ? '1' : '0'};
    transition: all 50ms ease-in-out;
    height: 45%;
    width: .2rem;
    background: #87CEFAaf;
    position: absolute;
    left: -.024rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50rem;
`
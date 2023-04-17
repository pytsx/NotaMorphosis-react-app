import styled from "@emotion/styled";
import { ITypographyStyled } from "./Typography.type";

const typographyBase = ({ size, family, weight, lineHeight, color, letterSpace, sx, wrap }: ITypographyStyled) => `
    font-size: ${size};
    font-family: ${family};
    font-weight: ${weight};
    line-height: ${lineHeight};
    color: ${color};
    letter-spacing: ${letterSpace};
    display: ${letterSpace};
    ${sx};
    white-space: ${wrap};

`;

export const P = styled.p<ITypographyStyled>`
    ${typographyBase};
`

export const H1 = styled.h1<ITypographyStyled>`
    ${typographyBase};

`

export const H2 = styled.h2<ITypographyStyled>`
    ${typographyBase};

`

export const H3 = styled.h3<ITypographyStyled>`
    ${typographyBase};

`

export const H4 = styled.h4<ITypographyStyled>`
    ${typographyBase};

`

export const H5 = styled.h5<ITypographyStyled>`
    ${typographyBase};

`

export const H6 = styled.h6<ITypographyStyled>`
    ${typographyBase};

`

export const Captcha = styled.p<ITypographyStyled>`
    ${typographyBase};

`


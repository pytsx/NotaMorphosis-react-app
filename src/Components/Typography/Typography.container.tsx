import { useTheme } from "../../Common/Context/Theme";
import { Captcha, H1, H2, H3, H4, H5, H6, P } from "./Typography.styled";
import { ITypography } from "./Typography.type";

export const Typography = ({
    children,
    variant = 'p',
    p = 14,
    weight = 600,
    family,
    color,
    lineHeight = `${p * 0.06}`,
    letterSpace = `-.020rem`,
    display = `inline`,
    text,
    sx,
    wrap = 'nowrap',
    margin,
    padding
}: ITypography) => {
    const { theme } = useTheme()
    const sizes: { [key: string]: number } = {
        h1: p * 1.16 ** 4,
        h2: p * 1.16 ** 3,
        h3: p * 1.16 ** 2,
        h4: p * 1.16 ** 1.2,
        h5: p * 1.16 * .99,
        h6: p * .9,
        p,
        captcha: p * 0.64
    };


    const Component = {
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        p: P,
        captcha: Captcha
    }[variant] || P;
    return (
        <Component
            lineHeight={`${lineHeight}em`}
            family={family ? family : String(theme?.typography.fontFamily)}
            weight={weight}
            size={`${sizes[variant]}px`}
            color={color ? color : String(theme?.palette.typography.primary)}
            letterSpace={letterSpace}
            sx={sx}
            wrap={wrap}
            display={display}
            margin={margin}
            padding={padding}
        >
            {children ? children : text}
        </Component>
    );
};

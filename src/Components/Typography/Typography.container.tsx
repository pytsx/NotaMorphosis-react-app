import { Captcha, H1, H2, H3, H4, H5, H6, P } from "./Typography.styled";
import { ITypography } from "./Typography.type";

export const Typography = ({
    children,
    variant = 'p',
    p = 14,
    weight = 600,
    family = "Segoe UI",
    color = '#c9c9c9',
    lineHeight = `${p * 0.06}`,
    letterSpace = `-.020rem`,
    display = `inline`,
    text,
    sx
}: ITypography) => {
    const sizes: { [key: string]: number } = {
        h1: p * 1.16 ** 4,
        h2: p * 1.16 ** 3,
        h3: p * 1.16 ** 2,
        h4: p * 1.16 ** 1.2,
        h5: p * 1.16 * .99,
        h6: p * .9,
        p,
        captcha: p * 0.8
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
            family={family}
            weight={weight}
            size={`${sizes[variant]}px`}
            color={color}
            letterSpace={letterSpace}
            sx={sx}
            display={display}
        >
            {children ? children : text}
        </Component>
    );
};


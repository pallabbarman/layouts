import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        text1: React.CSSProperties;
        text2: React.CSSProperties;
        text3: React.CSSProperties;
        text4: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        text1: React.CSSProperties;
        text2: React.CSSProperties;
        text3: React.CSSProperties;
        text4: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h1: true;
        h2: true;
        h3: true;
        h4: true;
        h5: false;
        h6: false;
        text1: true;
        text2: true;
        text3: true;
        text4: true;
        subtitle1: false;
        subtitle2: false;
        body1: false;
        body2: false;
        button: false;
        caption: false;
        overline: false;
    }
}

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
    typography: {
        fontFamily: 'var(--font-family-open-sans)',
        h1: {
            fontWeight: 700,
            fontSize: 32,
            lineHeight: 40 / 32,
            fontFamily: 'var(--font-family-montserrat)',
        },
        h2: {
            fontWeight: 700,
            fontSize: 24,
            lineHeight: 32 / 24,
            fontFamily: 'var(--font-family-montserrat)',
        },
        h3: {
            fontWeight: 700,
            fontSize: 18,
            lineHeight: 24 / 18,
            fontFamily: 'var(--font-family-montserrat)',
        },
        text1: {
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 24 / 16,
            fontFamily: 'var(--font-family-open-sans)',
        },
        text2: {
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 24 / 14,
            fontFamily: 'var(--font-family-open-sans)',
        },
        text3: {
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 16 / 12,
            fontFamily: 'var(--font-family-open-sans)',
        },
        text4: {
            fontWeight: 400,
            fontSize: 10,
            lineHeight: 16 / 10,
            fontFamily: 'var(--font-family-open-sans)',
        },
    },
});

export default theme;

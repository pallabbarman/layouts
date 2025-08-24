/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createTheme } from '@mui/material/styles';
import type { CSSProperties } from 'react';

interface CustomTypographyVariants {
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

interface CustomColorVariants {
    black: true;
    white: true;
    grey800: true;
    grey600: true;
    grey400: true;
    grey200: true;
    grey100: true;
    moonstone900: true;
    moonstone600: true;
    moonstone200: true;
    moonstone100: true;
    flame800: true;
    flame600: true;
    flame200: true;
    flame100: true;
    primary: false;
    secondary: false;
    error: false;
    warning: false;
    info: false;
    success: false;
    textPrimary: false;
    textSecondary: false;
    textDisabled: false;
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        text1: CSSProperties;
        text2: CSSProperties;
        text3: CSSProperties;
        text4: CSSProperties;
    }

    interface TypographyVariantsOptions {
        text1?: CSSProperties;
        text2?: CSSProperties;
        text3?: CSSProperties;
        text4?: CSSProperties;
    }

    interface Palette {
        black: Palette['primary'];
        white: Palette['primary'];
        grey800: Palette['primary'];
        grey600: Palette['primary'];
        grey400: Palette['primary'];
        grey200: Palette['primary'];
        grey100: Palette['primary'];
        moonstone900: Palette['primary'];
        moonstone600: Palette['primary'];
        moonstone200: Palette['primary'];
        moonstone100: Palette['primary'];
        flame800: Palette['primary'];
        flame600: Palette['primary'];
        flame200: Palette['primary'];
        flame100: Palette['primary'];
    }

    interface PaletteOptions {
        black?: PaletteOptions['primary'];
        white?: PaletteOptions['primary'];
        grey800?: PaletteOptions['primary'];
        grey600?: PaletteOptions['primary'];
        grey400?: PaletteOptions['primary'];
        grey200?: PaletteOptions['primary'];
        grey100?: PaletteOptions['primary'];
        moonstone900?: PaletteOptions['primary'];
        moonstone600?: PaletteOptions['primary'];
        moonstone200?: PaletteOptions['primary'];
        moonstone100?: PaletteOptions['primary'];
        flame800?: PaletteOptions['primary'];
        flame600?: PaletteOptions['primary'];
        flame200?: PaletteOptions['primary'];
        flame100?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides
        extends CustomTypographyVariants {}
}
declare module '@mui/material/Typography' {
    interface TypographyPropsColorOverrides extends CustomColorVariants {}
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides extends CustomColorVariants {}
}

declare module '@mui/material/CircularProgress' {
    interface CircularProgressPropsColorOverrides extends CustomColorVariants {}
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides extends CustomColorVariants {}
}

const theme = createTheme({
    colorSchemes: {
        light: true,
        dark: {
            palette: {
                black: {
                    contrastText: '#ffffff',
                    main: '#050F10',
                },
                white: {
                    contrastText: '#22686D',
                    main: '#FFFFFF',
                },
            },
        },
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
    palette: {
        black: {
            contrastText: '#ffffff',
            main: '#050F10',
        },
        white: {
            contrastText: '#22686D',
            main: '#FFFFFF',
        },
        grey800: {
            contrastText: '#ffffff',
            main: '#707070',
        },
        grey600: {
            contrastText: '#ffffff',
            main: '#999999',
        },
        grey400: {
            contrastText: '#050F10',
            main: '#C2C2C2',
        },
        grey200: {
            contrastText: '#050F10',
            main: '#EBEBEB',
        },
        grey100: {
            contrastText: '#050F10',
            main: '#F8F8F8',
        },
        moonstone900: {
            contrastText: '#ffffff',
            main: '#22686D',
        },
        moonstone600: {
            contrastText: '#ffffff',
            main: '#48BDCA',
        },
        moonstone200: {
            contrastText: '#22686D',
            main: '#D0EEF0',
        },
        moonstone100: {
            contrastText: '#22686D',
            main: '#EFF9FA',
        },
        flame800: {
            contrastText: '#ffffff',
            main: '#B83D14',
        },
        flame600: {
            contrastText: '#ffffff',
            main: '#E56138',
        },
        flame200: {
            contrastText: '#B83D14',
            main: '#F9D4C8',
        },
        flame100: {
            contrastText: '#E56138',
            main: '#FDF1ED',
        },
    },
});

export default theme;

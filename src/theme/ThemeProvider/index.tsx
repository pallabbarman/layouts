import CssBaseline from '@mui/material/CssBaseline';
import {
    ThemeProvider as MuiThemeProvider,
    responsiveFontSizes,
} from '@mui/material/styles';
import { type ReactNode } from 'react';
import theme from 'theme/theme';

export interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <MuiThemeProvider theme={responsiveFontSizes(theme)}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;

import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    useColorScheme,
} from '@mui/material';
import ThemeSwitchField from 'components/ThemeSwitchField';

const MainNavbar = () => {
    const { mode, setMode } = useColorScheme();

    if (!mode) {
        return null;
    }

    const isDark = mode === 'dark';

    return (
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        noWrap
                        variant="h2"
                        component="div"
                        flexGrow={1}
                    >
                        Layouts
                    </Typography>
                    <ThemeSwitchField
                        value={isDark}
                        onChange={(event) =>
                            setMode(event.target.checked ? 'dark' : 'light')
                        }
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MainNavbar;

import Container from '@mui/material/Container';
import ErrorBoundary from 'components/ErrorBoundary';
import { Fragment } from 'react';
import { Outlet } from 'react-router';
import MainNavbar from './components/MainNavbar';

const MainLayout = () => {
    return (
        <Fragment>
            <MainNavbar />
            <Container maxWidth="lg">
                <ErrorBoundary>
                    <Outlet />
                </ErrorBoundary>
            </Container>
        </Fragment>
    );
};

export default MainLayout;

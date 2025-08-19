import SuspenseComponent from 'components/SuspenseComponent';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import routes from '.';

const RootLayout = SuspenseComponent(lazy(() => import('layouts/Root')));

const Home = SuspenseComponent(lazy(() => import('pages/Home')));

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: routes.home.path,
                Component: Home,
            },
        ],
    },
]);

export default router;

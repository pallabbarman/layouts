import SuspenseComponent from 'components/SuspenseComponent';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import routes from '.';

const RootLayout = SuspenseComponent(lazy(() => import('layouts/Root')));
const MainLayout = SuspenseComponent(lazy(() => import('layouts/Main')));

const Home = SuspenseComponent(lazy(() => import('pages/Home')));

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: routes.home.path,
                        element: <Home />,
                    },
                ],
            },
        ],
    },
]);

export default router;

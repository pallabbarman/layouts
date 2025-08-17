import RootLayout from 'layouts/Root';
import { createBrowserRouter } from 'react-router';
import routes from '.';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: routes.home.path,
                Component: null,
            },
        ],
    },
]);

export default router;

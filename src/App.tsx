import ErrorBoundary from 'components/ErrorBoundary';
import { RouterProvider } from 'react-router';
import router from 'routes/router';
import ThemeProvider from 'theme/ThemeProvider';

function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider>
                <RouterProvider router={router} />
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default App;

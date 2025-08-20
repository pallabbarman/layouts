import type { Preview } from '@storybook/react-vite';
import { MemoryRouter, Outlet } from 'react-router';
import ErrorBoundary from '../src/components/ErrorBoundary';
import ThemeProvider from '../src/theme/ThemeProvider';

const preview: Preview = {
    parameters: {
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [
        (Story) => (
            <MemoryRouter>
                <ErrorBoundary>
                    <ThemeProvider>
                        <Outlet />
                        <Story />
                    </ThemeProvider>
                </ErrorBoundary>
            </MemoryRouter>
        ),
    ],
};

export default preview;

import type { Meta, StoryObj } from '@storybook/react-vite';
import CircularProgress from '.';

const meta: Meta<typeof CircularProgress> = {
    component: CircularProgress,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'CircularProgress is used when retrieving data or performing slow computations, and help to notify users that loading is underway.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Small: Story = {
    args: {
        size: 20,
        color: 'flame600',
    },
};

export const Large: Story = {
    args: {
        size: 40,
    },
};

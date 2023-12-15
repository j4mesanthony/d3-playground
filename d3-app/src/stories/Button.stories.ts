import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "../components/controls/Button";

/**
 * Standard button
 */
const meta: Meta<typeof Button> = {
    title: 'Contols/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        label: 'Button'
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {}
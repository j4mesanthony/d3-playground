import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from "../components/controls/IconButton";

/**
 * Icon button
 */
const meta: Meta<typeof IconButton> = {
    title: 'Contols/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    args: {
        label: 'IconButton',
        disabled: false,
        icon: 'settings',
        onClick: () => {}
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {}
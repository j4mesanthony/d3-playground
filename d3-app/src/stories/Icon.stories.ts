import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from "../components/ui/Icon";

/**
 * Goggle Icon with wrapper
 */
const meta: Meta<typeof Icon> = {
    title: 'General UI/Icon',
    component: Icon,
    tags: ['autodocs'],
    args: {
        icon: 'Settings'
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    
}
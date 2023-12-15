import type { Meta, StoryObj } from '@storybook/react';
import { SideBarLayout } from "../layouts/SideBarLayout";

/**
 * Configurable horizontal 2 panel layout
 */
const meta: Meta<typeof SideBarLayout> = {
    title: 'Layouts/SideBarLayout',
    component: SideBarLayout,
    tags: ['autodocs'],
    args: {
        side: 'Side content',
        main: 'Main content',
        rightSide: false,
    }
}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {}

export const RightSide: Story = {
    args: {
        rightSide: true
    }
}
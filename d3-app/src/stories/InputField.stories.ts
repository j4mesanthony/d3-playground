import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from "../components/forms/InputField"; 

/**
 * InputField
 */
const meta: Meta<typeof InputField> = {
    title: 'Forms/InputField',
    component: InputField,
    tags: ['autodocs'],
    args: {
        titlecase: true,
        isDisabled: false,
        isRequired: false,
        placeholder: 'Enter content here...',
        type: 'string',
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {}
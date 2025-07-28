
import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';


const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    size: 'medium',
    variant: 'default',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    helperText: 'We will never share your email.',
    variant: 'default',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: '••••••••',
    error: 'Password is too short',
    variant: 'error',
  },
};

export const Success: Story = {
  args: {
    label: 'Phone',
    placeholder: '0123 456 789',
    helperText: 'Looks good!',
    variant: 'success',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Your full name',
    fullWidth: true,
  },
};

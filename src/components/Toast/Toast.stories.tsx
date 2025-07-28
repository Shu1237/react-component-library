import type { Meta, StoryObj } from '@storybook/react';
import Toast from './index';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A Toast component used to show brief feedback messages like success, error, warning, or info.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Type of the toast message',
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
      defaultValue: 'info'
    },
    title: {
      description: 'Title displayed at the top of the toast',
      control: 'text'
    },
    children: {
      description: 'Main content of the toast',
      control: 'text'
    },
    autoClose: {
      description: 'Auto dismiss the toast after a delay',
      control: 'boolean',
      defaultValue: true
    },
    autoCloseDelay: {
      description: 'Time in ms before auto dismiss',
      control: 'number',
      defaultValue: 3000
    },
    showCloseButton: {
      description: 'Show close (X) button',
      control: 'boolean',
      defaultValue: true
    }
  }
};

export default meta;
type Story = StoryObj<typeof Toast>;

// --- Individual Stories ---

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    children: 'Your action was completed successfully.'
  }
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error!',
    children: 'Something went wrong. Please try again.'
  }
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning!',
    children: 'Please check your input data.'
  }
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Info',
    children: 'Here is some useful information for you.'
  }
};

export const WithoutTitle: Story = {
  args: {
    variant: 'success',
    children: 'This toast has no title.'
  }
};



import type { Meta, StoryObj } from '@storybook/react';
import Toast from './index';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toast notifications for success, error, warning, and info messages.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Toast variant'
    },
    title: {
      control: 'text',
      description: 'Toast title'
    },
    autoClose: {
      control: 'boolean',
      description: 'Auto close after delay'
    },
    autoCloseDelay: {
      control: 'number',
      description: 'Auto close delay in milliseconds'
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button'
    },
    children: {
      control: 'text',
      description: 'Toast content'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Toast>;

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
    children: 'Toast without title'
  }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Toast variant="success" title="Success">Operation completed successfully!</Toast>
      <Toast variant="error" title="Error">Something went wrong!</Toast>
      <Toast variant="warning" title="Warning">Please be careful!</Toast>
      <Toast variant="info" title="Info">Just so you know...</Toast>
    </div>
  )
};

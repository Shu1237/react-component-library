import type { Meta, StoryObj } from '@storybook/react';
import Card from './index';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component for displaying content with optional title and various styling options.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title'
    },
    shadow: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Card shadow size'
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'], 
      description: 'Card padding size'
    },
    children: {
      control: 'text',
      description: 'Card content'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is a default card with some content inside.'
  }
};

export const WithoutTitle: Story = {
  args: {
    children: 'This card has no title, just content.'
  }
};

export const SmallShadow: Story = {
  args: {
    title: 'Small Shadow',
    children: 'Card with small shadow',
    shadow: 'small'
  }
};

export const LargeShadow: Story = {
  args: {
    title: 'Large Shadow', 
    children: 'Card with large shadow',
    shadow: 'large'
  }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, 300px)' }}>
      <Card title="Small Shadow" shadow="small">Small shadow card</Card>
      <Card title="Medium Shadow" shadow="medium">Medium shadow card</Card>
      <Card title="Large Shadow" shadow="large">Large shadow card</Card>
      <Card title="No Shadow" shadow="none">No shadow card</Card>
    </div>
  )
};
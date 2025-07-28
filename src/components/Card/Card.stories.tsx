
import Card from './index';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    image: { control: 'text' },
    actions: { control: false },
    footer: { control: false },
    shadow: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle or description',
    children: 'This is the card content area.',
    shadow: 'medium',
    padding: 'medium',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    subtitle: 'Subtitle text here',
    image: 'https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
    children: 'Card with image preview and text content.',
    shadow: 'large',
    padding: 'large',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Card with Action',
    subtitle: 'Example of a card with buttons',
    actions: <button className="text-sm text-blue-600 hover:underline">Edit</button>,
    children: 'This card has action buttons on the header.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    children: 'Main content of the card.',
    footer: <div className="text-xs text-gray-500">Updated 2 hours ago</div>,
  },
};

export const FullFeatured: Story = {
  args: {
    title: 'Full Card',
    subtitle: 'Complete with image, action, footer',
    image: 'https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
    actions: <button className="text-sm text-blue-500 hover:underline">Settings</button>,
    children: 'A fully featured card with all props used.',
    footer: <div className="text-sm text-gray-600">Created by Admin</div>,
    shadow: 'large',
    padding: 'large',
  },
};

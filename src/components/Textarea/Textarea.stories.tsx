import  { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Textarea from './index';


const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Nhập nội dung...',
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Viết gì đó ở đây...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Textarea bị vô hiệu hóa',
    disabled: true,
  },
};

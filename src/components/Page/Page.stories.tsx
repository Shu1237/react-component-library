
import type { Meta, StoryObj } from "@storybook/react";
import Page from "./index";


const meta: Meta<typeof Page> = {
  title: "Components/Page",
  component: Page,
  tags: ["autodocs"], // Cho phép tự động generate docs nếu cần
  args: {
    title: "Tiêu đề mẫu",
    children: <p>Nội dung mặc định của trang</p>,
  },
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    title: "Giới thiệu",
    children: <p>Đây là nội dung chính của trang.</p>,
  },
};

export const WithMultipleParagraphs: Story = {
  args: {
    title: "Trang có nhiều đoạn văn",
    children: (
      <div className="space-y-2">
        <p>Đây là đoạn văn thứ nhất.</p>
        <p>Đây là đoạn văn thứ hai.</p>
        <p>Đây là đoạn văn thứ ba.</p>
      </div>
    ),
  },
};

export const WithListContent: Story = {
  args: {
    title: "Trang có danh sách",
    children: (
      <ul className="list-disc list-inside space-y-1">
        <li>Mục 1</li>
        <li>Mục 2</li>
        <li>Mục 3</li>
      </ul>
    ),
  },
};

export const WithCustomReactNode: Story = {
  args: {
    title: "Trang có nội dung tùy chỉnh",
    children: (
      <div>
        <p className="mb-2">Nội dung giới thiệu:</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Nhấn vào đây
        </button>
      </div>
    ),
  },
};

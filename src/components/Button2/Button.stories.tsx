import type { Meta, StoryObj } from "@storybook/react";
import {
  ChevronRight,
  Download,
  Mail,
  Plus,
  Settings,
  Trash2,
} from "lucide-react";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Shadcn/Button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Button Component

A versatile button component built with Tailwind CSS and class-variance-authority. 
Supports multiple variants, sizes, and can be rendered as a child component using the \`asChild\` prop.

### Features
- **Multiple Variants**: Default, destructive, outline, secondary, ghost, and link styles
- **Multiple Sizes**: Small, default, large, and icon sizes
- **Flexible Rendering**: Can be rendered as any element using \`asChild\` prop
- **Accessibility**: Built with proper ARIA attributes and keyboard navigation
- **Icon Support**: Optimized for icons with proper sizing and spacing

### Usage
\`\`\`tsx
import { Button } from './components/Button';

// Basic usage
<Button>Click me</Button>

// With variant and size
<Button variant="outline" size="lg">Large Outline Button</Button>

// As a link
<Button asChild>
  <a href="/path">Link Button</a>
</Button>

// With icon
<Button variant="ghost" size="icon">
  <Settings className="h-4 w-4" />
</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The visual style variant of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Render as a child element (useful for custom components or links)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "The content of the button",
    },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    asChild: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic Variants
export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete Account",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const Icon: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <Settings className="h-4 w-4" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only button with square dimensions. Perfect for toolbar buttons.",
      },
    },
  },
};

// States
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state can be used for loading states.",
      },
    },
  },
};

// With Icons
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" />
        Send Email
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button with an icon. Icons are automatically sized to 16px (h-4 w-4).",
      },
    },
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: (
      <>
        Continue
        <ChevronRight className="ml-2 h-4 w-4" />
      </>
    ),
    variant: "outline",
  },
  parameters: {
    docs: {
      description: {
        story: "Button with a trailing icon.",
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    variant: "ghost",
    size: "icon",
    children: <Plus className="h-4 w-4" />,
    "aria-label": "Add item",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only button. Remember to include aria-label for accessibility.",
      },
    },
  },
};

// Grouped Examples
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available button variants displayed together.",
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" variant="outline">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available button sizes displayed together.",
      },
    },
  },
};

export const ActionButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Add New
      </Button>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
      <Button variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" />
        Delete
      </Button>
      <Button variant="ghost" size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Common action buttons with icons.",
      },
    },
  },
};

// Advanced Usage
export const AsChild: Story = {
  render: () => (
    <Button asChild>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        Visit GitHub
      </a>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Using `asChild` prop to render the button as a link element while maintaining button styling.",
      },
    },
  },
};

export const ResponsiveDesign: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="block sm:hidden">
        <Button size="sm" className="w-full">
          Mobile: Small Full Width
        </Button>
      </div>
      <div className="hidden sm:block md:hidden">
        <Button size="default">Tablet: Default Size</Button>
      </div>
      <div className="hidden md:block">
        <Button size="lg">Desktop: Large Size</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example of responsive button sizing using Tailwind's responsive utilities.",
      },
    },
  },
};

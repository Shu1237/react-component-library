import type { Meta, StoryObj } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./index";
import { ChevronRight, Slash, Home, Folder, File } from "lucide-react";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Shadcn/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A breadcrumb navigation component that displays the current page's location within a navigational hierarchy. Built with semantic HTML and accessibility features. Supports custom separators, ellipsis for long paths, and flexible styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for the breadcrumb container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// Basic breadcrumb
export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic breadcrumb navigation with links and current page.",
      },
    },
  },
};

// Simple two-level breadcrumb
export const SimpleBreadcrumb: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Settings</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Simple two-level breadcrumb navigation.",
      },
    },
  },
};

// Multi-level breadcrumb
export const MultiLevel: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard/projects">Projects</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard/projects/react-app">
            React App
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Settings</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multi-level breadcrumb showing deep navigation hierarchy.",
      },
    },
  },
};

// Breadcrumb with icons
export const WithIcons: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-2">
            <Home className="size-4" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/documents" className="flex items-center gap-2">
            <Folder className="size-4" />
            Documents
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-2">
            <File className="size-4" />
            report.pdf
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Breadcrumb with icons for better visual hierarchy.",
      },
    },
  },
};

// Breadcrumb with custom separators
export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/category">Category</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Product</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Breadcrumb using custom slash separator instead of chevron.",
      },
    },
  },
};

// Breadcrumb with text separators
export const TextSeparator: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>|</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>|</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Article Title</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Breadcrumb with text-based separators.",
      },
    },
  },
};

// Breadcrumb with ellipsis (collapsed middle)
export const WithEllipsis: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Breadcrumb with ellipsis to indicate collapsed middle levels.",
      },
    },
  },
};

// E-commerce breadcrumb
export const EcommerceBreadcrumb: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Store</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/electronics">Electronics</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/electronics/laptops">Laptops</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/electronics/laptops/gaming">
            Gaming
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>MacBook Pro 16"</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "E-commerce style breadcrumb for product navigation.",
      },
    },
  },
};

// Documentation breadcrumb
export const DocumentationBreadcrumb: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components/navigation">
            Navigation
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Documentation-style breadcrumb navigation.",
      },
    },
  },
};

// File system breadcrumb
export const FileSystemBreadcrumb: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-1">
            <Home className="size-3" />
            Root
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/users">Users</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/users/john">john</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/users/john/documents">
            Documents
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>project-files</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "File system navigation breadcrumb.",
      },
    },
  },
};

// Responsive breadcrumb with ellipsis
export const ResponsiveBreadcrumb: Story = {
  render: () => (
    <div className="w-64">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/category">Category</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/subcategory">Subcategory</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem className="md:hidden">
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator className="md:hidden" />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Item</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Responsive breadcrumb that collapses on smaller screens.",
      },
    },
  },
};

// Long text breadcrumb
export const LongTextBreadcrumb: Story = {
  render: () => (
    <div className="w-96">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/very-long-category-name">
              Very Long Category Name That Might Overflow
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              Another Very Long Page Title That Demonstrates Text Wrapping
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Breadcrumb with long text that demonstrates text wrapping behavior.",
      },
    },
  },
};

// Admin dashboard breadcrumb
export const AdminDashboard: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin/users">User Management</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin/users/roles">
            Roles & Permissions
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Edit Role</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Admin dashboard breadcrumb for complex management interfaces.",
      },
    },
  },
};

// Breadcrumb with different styling
export const StyledBreadcrumb: Story = {
  render: () => (
    <Breadcrumb className="bg-gray-50 p-3 rounded-lg border">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="text-gray-400" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/products"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="text-gray-400" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-gray-900 font-semibold">
            Detail View
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Breadcrumb with custom styling and background.",
      },
    },
  },
};

// Compact breadcrumb
export const CompactBreadcrumb: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList className="text-xs gap-1">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-xs">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="size-3" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/settings" className="text-xs">
            Settings
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="size-3" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-xs">Profile</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Compact breadcrumb with smaller text and spacing.",
      },
    },
  },
};

// Complete navigation showcase
export const NavigationShowcase: Story = {
  render: () => (
    <div className="space-y-6 p-6 max-w-2xl">
      <div>
        <h3 className="font-semibold mb-2">E-commerce Navigation</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Store</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/men">Men's Clothing</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/men/shirts">Shirts</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Classic Button Down</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Documentation Navigation</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs" className="flex items-center gap-1">
                <Home className="size-3" />
                Docs
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components/navigation">
                Navigation
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Admin Panel Navigation</h3>
        <Breadcrumb className="bg-slate-50 p-2 rounded border">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin" className="text-blue-600">
                Admin
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/content" className="text-blue-600">
                Content
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">
                Edit Article
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete showcase of different breadcrumb navigation patterns.",
      },
    },
  },
};

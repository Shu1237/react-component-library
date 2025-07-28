import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./index";

const meta: Meta<typeof Avatar> = {
  title: "Components/Shadcn/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An avatar component built on top of Radix UI Avatar primitive. Displays user profile pictures with fallback text when images fail to load. Supports different sizes and customizable styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for the avatar container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Default avatar with image
export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/129851755?v=4"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default avatar with image and fallback text.",
      },
    },
  },
};

// Avatar with image only
export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
      <AvatarFallback>VC</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar displaying a user image with fallback initials.",
      },
    },
  },
};

// Avatar with fallback (no image)
export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid-url.png" alt="Invalid" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Avatar with fallback text when image fails to load or is not provided.",
      },
    },
  },
};

// Different sizes
export const Small: Story = {
  render: () => (
    <Avatar className="size-6">
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/129851755?v=4"
        alt="@shadcn"
      />
      <AvatarFallback className="text-xs">CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Small avatar (24px).",
      },
    },
  },
};

export const Medium: Story = {
  render: () => (
    <Avatar className="size-10">
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/129851755?v=4"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Medium avatar (40px).",
      },
    },
  },
};

export const Large: Story = {
  render: () => (
    <Avatar className="size-16">
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/129851755?v=4"
        alt="@shadcn"
      />
      <AvatarFallback className="text-lg">CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Large avatar (64px).",
      },
    },
  },
};

export const ExtraLarge: Story = {
  render: () => (
    <Avatar className="size-24">
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/129851755?v=4"
        alt="@shadcn"
      />
      <AvatarFallback className="text-2xl">CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Extra large avatar (96px).",
      },
    },
  },
};

// Size showcase
export const SizeShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="size-6">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/129851755?v=4"
          alt="@shadcn"
        />
        <AvatarFallback className="text-xs">XS</AvatarFallback>
      </Avatar>
      <Avatar className="size-8">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/129851755?v=4"
          alt="@shadcn"
        />
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      <Avatar className="size-10">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/129851755?v=4"
          alt="@shadcn"
        />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/129851755?v=4"
          alt="@shadcn"
        />
        <AvatarFallback className="text-lg">LG</AvatarFallback>
      </Avatar>
      <Avatar className="size-24">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/129851755?v=4"
          alt="@shadcn"
        />
        <AvatarFallback className="text-2xl">XL</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Showcase of different avatar sizes from extra small to extra large.",
      },
    },
  },
};

// Different fallback styles
export const ColoredFallbacks: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://invalid-url.png" alt="User 1" />
        <AvatarFallback className="bg-red-500 text-white">JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid-url.png" alt="User 2" />
        <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid-url.png" alt="User 3" />
        <AvatarFallback className="bg-green-500 text-white">CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid-url.png" alt="User 4" />
        <AvatarFallback className="bg-purple-500 text-white">EF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid-url.png" alt="User 5" />
        <AvatarFallback className="bg-orange-500 text-white">GH</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar fallbacks with different background colors.",
      },
    },
  },
};

// Avatar with border
export const WithBorder: Story = {
  render: () => (
    <Avatar className="border-2 border-gray-300">
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/129851755?v=4"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar with a border around it.",
      },
    },
  },
};

// Avatar with status indicator
export const WithStatusIndicator: Story = {
  render: () => (
    <div className="relative">
      <Avatar>
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/129851755?v=4"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="absolute -bottom-0 -right-0 size-3 rounded-full bg-green-500 border-2 border-white"></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar with an online status indicator.",
      },
    },
  },
};

// Avatar group
export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar className="border-2 border-white">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/129851755?v=4"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://invalid-url.png" alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://invalid-url.png" alt="User 4" />
        <AvatarFallback className="bg-gray-600 text-white">+2</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Group of overlapping avatars, useful for showing multiple users.",
      },
    },
  },
};

// Avatar with different shapes (using custom classes)
export const SquareAvatar: Story = {
  render: () => (
    <Avatar className="rounded-lg">
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/129851755?v=4"
        alt="@shadcn"
      />
      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Square avatar with rounded corners.",
      },
    },
  },
};

export const RoundedSquareAvatar: Story = {
  render: () => (
    <Avatar className="rounded-xl">
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/129851755?v=4"
        alt="@shadcn"
      />
      <AvatarFallback className="rounded-xl">CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar with more rounded square shape.",
      },
    },
  },
};

// Avatar with custom gradient fallback
export const GradientFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid-url.png" alt="Gradient User" />
      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        GU
      </AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar with gradient background fallback.",
      },
    },
  },
};

// Loading state simulation
export const LoadingState: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="" alt="Loading..." />
      <AvatarFallback className="bg-gray-200 animate-pulse">
        <div className="size-4 bg-gray-300 rounded-full"></div>
      </AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar in loading state with pulse animation.",
      },
    },
  },
};

// Profile avatar showcase
export const ProfileShowcase: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <div className="text-center">
        <Avatar className="size-24 mx-auto mb-4">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/129851755?v=4"
            alt="John Doe"
          />
          <AvatarFallback className="text-2xl">JD</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-semibold">Minh Ngheee</h3>
        <p className="text-gray-600">Software Engineer</p>
      </div>

      <div className="border-t pt-4">
        <h4 className="font-medium mb-3">Team Members</h4>
        <div className="space-y-3">
          {[
            {
              name: "Bastard 1",
              role: "Designer",
              initials: "AS",
              image: "https://github.com/vercel.png",
            },
            {
              name: "Bastard 2",
              role: "Developer",
              initials: "BJ",
              image: null,
            },
            {
              name: "Bastard 3",
              role: "Manager",
              initials: "CB",
              image: null,
            },
          ].map((member, index) => (
            <div key={index} className="flex items-center gap-3">
              <Avatar className="size-10">
                {member.image && (
                  <AvatarImage src={member.image} alt={member.name} />
                )}
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{member.name}</p>
                <p className="text-xs text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete profile showcase using avatars in different contexts.",
      },
    },
  },
};

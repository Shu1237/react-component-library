import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./index";
import { addDays, addMonths, subDays } from "date-fns";

const meta: Meta<typeof Calendar> = {
  title: "Components/Shadcn/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible calendar component built on top of react-day-picker with customizable styling and behavior. Supports single date selection, date ranges, multiple dates, and various display modes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "multiple", "range"],
      description: "Calendar selection mode",
    },
    showOutsideDays: {
      control: "boolean",
      description: "Show days outside the current month",
    },
    captionLayout: {
      control: "select",
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
      description: "Layout for the month/year caption",
    },
    buttonVariant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Variant for navigation buttons",
    },
    disabled: {
      control: "object",
      description: "Disabled dates configuration",
    },
    selected: {
      control: "object",
      description: "Selected date(s)",
    },
    defaultMonth: {
      control: "object",
      description: "Default month to display",
    },
    numberOfMonths: {
      control: "number",
      description: "Number of months to display",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// Default calendar
export const Default: Story = {
  args: {
    mode: "single",
    showOutsideDays: true,
    captionLayout: "label",
  },
};

// Single date selection
export const SingleSelection: Story = {
  args: {
    mode: "single",
    selected: new Date(),
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Calendar with single date selection mode. Click on a date to select it.",
      },
    },
  },
};

// Multiple date selection
export const MultipleSelection: Story = {
  args: {
    mode: "multiple",
    selected: [new Date(), addDays(new Date(), 2), addDays(new Date(), 5)],
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Calendar allowing multiple date selection. Hold Ctrl/Cmd to select multiple dates.",
      },
    },
  },
};

// Date range selection
export const RangeSelection: Story = {
  args: {
    mode: "range",
    selected: {
      from: new Date(),
      to: addDays(new Date(), 7),
    },
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Calendar with date range selection. Click and drag or click two dates to select a range.",
      },
    },
  },
};

// Multiple months
export const MultipleMonths: Story = {
  args: {
    mode: "single",
    numberOfMonths: 2,
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar displaying multiple months at once.",
      },
    },
  },
};

// Dropdown navigation
export const DropdownNavigation: Story = {
  args: {
    mode: "single",
    captionLayout: "dropdown",
    showOutsideDays: true,
    fromYear: 2020,
    toYear: 2030,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Calendar with dropdown navigation for month and year selection.",
      },
    },
  },
};

// Month dropdown only
export const MonthDropdownOnly: Story = {
  args: {
    mode: "single",
    captionLayout: "dropdown-months",
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with dropdown for month selection only.",
      },
    },
  },
};

// Year dropdown only
export const YearDropdownOnly: Story = {
  args: {
    mode: "single",
    captionLayout: "dropdown-years",
    showOutsideDays: true,
    fromYear: 2020,
    toYear: 2030,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with dropdown for year selection only.",
      },
    },
  },
};

// Without outside days
export const WithoutOutsideDays: Story = {
  args: {
    mode: "single",
    showOutsideDays: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar without showing days from previous/next months.",
      },
    },
  },
};

// With disabled dates
export const WithDisabledDates: Story = {
  args: {
    mode: "single",
    disabled: [
      // Disable weekends
      { dayOfWeek: [0, 6] },
      // Disable past dates
      { before: new Date() },
      // Disable specific date range
      { from: addDays(new Date(), 10), to: addDays(new Date(), 15) },
    ],
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Calendar with various disabled date configurations: weekends, past dates, and specific date ranges.",
      },
    },
  },
};

// Today highlighted
export const TodayHighlighted: Story = {
  args: {
    mode: "single",
    today: new Date(),
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with today's date highlighted.",
      },
    },
  },
};

// Different button variants
export const OutlineButtons: Story = {
  args: {
    mode: "single",
    buttonVariant: "outline",
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with outline variant navigation buttons.",
      },
    },
  },
};

export const SecondaryButtons: Story = {
  args: {
    mode: "single",
    buttonVariant: "secondary",
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with secondary variant navigation buttons.",
      },
    },
  },
};

// Custom default month
export const CustomDefaultMonth: Story = {
  args: {
    mode: "single",
    defaultMonth: addMonths(new Date(), 3),
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar starting with a specific month (3 months from now).",
      },
    },
  },
};

// Future dates only
export const FutureDatesOnly: Story = {
  args: {
    mode: "single",
    disabled: { before: new Date() },
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar allowing only future date selection.",
      },
    },
  },
};

// Past dates only
export const PastDatesOnly: Story = {
  args: {
    mode: "single",
    disabled: { after: subDays(new Date(), 1) },
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar allowing only past date selection.",
      },
    },
  },
};

// Week selection
export const WeekSelection: Story = {
  args: {
    mode: "range",
    showOutsideDays: true,
    showWeekNumber: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Calendar with week numbers displayed, useful for week-based selection.",
      },
    },
  },
};

// Compact view
export const CompactView: Story = {
  args: {
    mode: "single",
    showOutsideDays: false,
    captionLayout: "label",
  },
  parameters: {
    docs: {
      description: {
        story: "Compact calendar view without outside days.",
      },
    },
  },
};

// Large calendar with navigation
export const LargeCalendarWithNavigation: Story = {
  args: {
    mode: "range",
    numberOfMonths: 3,
    showOutsideDays: true,
    captionLayout: "dropdown",
    fromYear: 2020,
    toYear: 2030,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Large calendar displaying 3 months with dropdown navigation for easy month/year selection.",
      },
    },
  },
};

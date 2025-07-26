import type { Meta, StoryObj } from "@storybook/react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "./index";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Area,
  AreaChart as RechartsAreaChart,
  Bar,
  BarChart as RechartsBarChart,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  RadialBarChart as RechartsRadialBarChart,
  RadialBar,
  Cell,
  ComposedChart as RechartsComposedChart,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
} from "lucide-react";

const meta: Meta<typeof ChartContainer> = {
  title: "Components/Shadcn/Chart",
  component: ChartContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible chart component built on top of Recharts with customizable theming and consistent styling. Supports various chart types including line, bar, area, pie, and more. Includes built-in tooltip, legend, and responsive design capabilities.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    config: {
      control: "object",
      description:
        "Chart configuration object defining data keys, colors, and labels",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the chart container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

// Sample data for various charts
const salesData = [
  { month: "Jan", sales: 4000, revenue: 2400, profit: 1600 },
  { month: "Feb", sales: 3000, revenue: 1398, profit: 1200 },
  { month: "Mar", sales: 2000, revenue: 3000, profit: 1800 },
  { month: "Apr", sales: 2780, revenue: 3908, profit: 2200 },
  { month: "May", sales: 1890, revenue: 4800, profit: 2800 },
  { month: "Jun", sales: 2390, revenue: 3800, profit: 2600 },
  { month: "Jul", sales: 3490, revenue: 4300, profit: 3100 },
];

const userGrowthData = [
  { date: "2024-01", users: 186, activeUsers: 80 },
  { date: "2024-02", users: 305, activeUsers: 200 },
  { date: "2024-03", users: 237, activeUsers: 120 },
  { date: "2024-04", users: 273, activeUsers: 190 },
  { date: "2024-05", users: 209, activeUsers: 130 },
  { date: "2024-06", users: 214, activeUsers: 140 },
  { date: "2024-07", users: 320, activeUsers: 250 },
];

const categoryData = [
  { name: "Electronics", value: 35, fill: "hsl(var(--chart-1))" },
  { name: "Clothing", value: 25, fill: "hsl(var(--chart-2))" },
  { name: "Books", value: 20, fill: "hsl(var(--chart-3))" },
  { name: "Home & Garden", value: 15, fill: "hsl(var(--chart-4))" },
  { name: "Sports", value: 5, fill: "hsl(var(--chart-5))" },
];

const performanceData = [
  { quarter: "Q1", target: 100, actual: 95, growth: 15 },
  { quarter: "Q2", target: 120, actual: 130, growth: 25 },
  { quarter: "Q3", target: 150, actual: 140, growth: 18 },
  { quarter: "Q4", target: 180, actual: 200, growth: 35 },
];

// Chart configurations
const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-2))",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-3))",
  },
  users: {
    label: "Total Users",
    color: "hsl(var(--chart-1))",
  },
  activeUsers: {
    label: "Active Users",
    color: "hsl(var(--chart-2))",
  },
  target: {
    label: "Target",
    color: "hsl(var(--chart-1))",
  },
  actual: {
    label: "Actual",
    color: "hsl(var(--chart-2))",
  },
  growth: {
    label: "Growth %",
    color: "hsl(var(--chart-3))",
  },
};

// Basic Line Chart
export const BasicLineChart: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Sales Trend</CardTitle>
        <CardDescription>
          Monthly sales performance over 7 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <RechartsLineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="var(--color-sales)"
              strokeWidth={2}
              dot={{ fill: "var(--color-sales)" }}
            />
          </RechartsLineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Simple line chart showing sales trend over time with tooltips.",
      },
    },
  },
};

// Multi-line Chart
export const MultiLineChart: Story = {
  render: () => (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>User Growth Analytics</CardTitle>
        <CardDescription>
          Total users vs active users comparison
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <RechartsLineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              type="monotone"
              dataKey="users"
              stroke="var(--color-users)"
              strokeWidth={2}
              dot={{ fill: "var(--color-users)" }}
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="var(--color-activeUsers)"
              strokeWidth={2}
              dot={{ fill: "var(--color-activeUsers)" }}
            />
          </RechartsLineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multi-line chart comparing two metrics with legend.",
      },
    },
  },
};

// Bar Chart
export const BasicBarChart: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Monthly Revenue</CardTitle>
        <CardDescription>Revenue breakdown by month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <RechartsBarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Bar chart displaying monthly revenue with rounded corners.",
      },
    },
  },
};

// Stacked Bar Chart
export const StackedBarChart: Story = {
  render: () => (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Financial Overview</CardTitle>
        <CardDescription>Sales, revenue, and profit comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <RechartsBarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="sales"
              stackId="a"
              fill="var(--color-sales)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="revenue"
              stackId="a"
              fill="var(--color-revenue)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="profit"
              stackId="a"
              fill="var(--color-profit)"
              radius={[4, 4, 0, 0]}
            />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Stacked bar chart showing multiple metrics in a single view.",
      },
    },
  },
};

// Area Chart
export const BasicAreaChart: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Growth Trend</CardTitle>
        <CardDescription>Cumulative growth over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <RechartsAreaChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="var(--color-profit)"
              fill="var(--color-profit)"
              fillOpacity={0.6}
            />
          </RechartsAreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Area chart showing profit trends with filled area visualization.",
      },
    },
  },
};

// Stacked Area Chart
export const StackedAreaChart: Story = {
  render: () => (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>User Base Growth</CardTitle>
        <CardDescription>
          Total and active user growth over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <RechartsAreaChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              type="monotone"
              dataKey="activeUsers"
              stackId="1"
              stroke="var(--color-activeUsers)"
              fill="var(--color-activeUsers)"
              fillOpacity={0.8}
            />
            <Area
              type="monotone"
              dataKey="users"
              stackId="1"
              stroke="var(--color-users)"
              fill="var(--color-users)"
              fillOpacity={0.6}
            />
          </RechartsAreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Stacked area chart comparing user metrics over time.",
      },
    },
  },
};

// Pie Chart
export const BasicPieChart: Story = {
  render: () => (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Sales by Category</CardTitle>
        <CardDescription>
          Distribution of sales across product categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-square">
          <RechartsPieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </RechartsPieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Pie chart showing category distribution with percentage labels.",
      },
    },
  },
};

// Donut Chart
export const DonutChart: Story = {
  render: () => (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Market Share</CardTitle>
        <CardDescription>Product category market share</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-square">
          <RechartsPieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </RechartsPieChart>
        </ChartContainer>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
          {categoryData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span>
                {item.name}: {item.value}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Donut chart with custom legend showing market share data.",
      },
    },
  },
};

// Composed Chart (Bar + Line)
export const MixedChart: Story = {
  render: () => (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Performance vs Target</CardTitle>
        <CardDescription>
          Quarterly performance metrics with growth percentage
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <RechartsComposedChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              yAxisId="left"
              dataKey="target"
              fill="var(--color-target)"
              radius={4}
            />
            <Bar
              yAxisId="left"
              dataKey="actual"
              fill="var(--color-actual)"
              radius={4}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="growth"
              stroke="var(--color-growth)"
              strokeWidth={3}
              dot={{ fill: "var(--color-growth)", strokeWidth: 2, r: 6 }}
            />
          </RechartsComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Composed chart combining bars and line to show different metrics.",
      },
    },
  },
};

// Radial Bar Chart
export const RadialChart: Story = {
  render: () => {
    const radialData = [
      { name: "Q1", value: 85, fill: "hsl(var(--chart-1))" },
      { name: "Q2", value: 92, fill: "hsl(var(--chart-2))" },
      { name: "Q3", value: 78, fill: "hsl(var(--chart-3))" },
      { name: "Q4", value: 95, fill: "hsl(var(--chart-4))" },
    ];

    return (
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Quarterly Goals</CardTitle>
          <CardDescription>Achievement percentage by quarter</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="aspect-square">
            <RechartsRadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="80%"
              data={radialData}
            >
              <ChartTooltip content={<ChartTooltipContent />} />
              <RadialBar dataKey="value" cornerRadius={10} />
            </RechartsRadialBarChart>
          </ChartContainer>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center text-sm">
            {radialData.map((item, index) => (
              <div key={index}>
                <div
                  className="mx-auto mb-1 h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />
                <div className="font-medium">{item.name}</div>
                <div className="text-muted-foreground">{item.value}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Radial bar chart showing progress towards quarterly goals.",
      },
    },
  },
};

// Dashboard with multiple charts
export const DashboardShowcase: Story = {
  render: () => (
    <div className="grid gap-6 p-6 max-w-7xl">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +20.1%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +180.1%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600 flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" />
                -19%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +201
              </span>
              since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue trend</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <RechartsAreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-revenue)"
                  fill="var(--color-revenue)"
                  fillOpacity={0.6}
                />
              </RechartsAreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales Distribution</CardTitle>
            <CardDescription>By product category</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="aspect-square">
              <RechartsPieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </RechartsPieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>
            Target vs actual performance with growth indicators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <RechartsComposedChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                yAxisId="left"
                dataKey="target"
                fill="var(--color-target)"
                radius={4}
              />
              <Bar
                yAxisId="left"
                dataKey="actual"
                fill="var(--color-actual)"
                radius={4}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="growth"
                stroke="var(--color-growth)"
                strokeWidth={3}
                dot={{ fill: "var(--color-growth)" }}
              />
            </RechartsComposedChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete dashboard showcase with multiple chart types and KPI cards.",
      },
    },
  },
};

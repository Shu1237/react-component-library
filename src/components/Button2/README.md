# Button Component

A versatile, accessible button component built with Tailwind CSS and class-variance-authority.

## Features

- ✅ **Multiple Variants**: 6 different visual styles
- ✅ **Multiple Sizes**: 4 different sizes including icon-only
- ✅ **Flexible Rendering**: Can render as any element using `asChild` prop
- ✅ **Full TypeScript Support**: Complete type definitions
- ✅ **Accessibility Ready**: WCAG compliant with proper ARIA support
- ✅ **Icon Optimized**: Automatic icon sizing and spacing
- ✅ **Theme Support**: Customizable via CSS custom properties

## Quick Start

```tsx
import { Button } from './components/Button';

// Basic button
<Button>Click me</Button>

// With variant and size
<Button variant="outline" size="lg">
  Large Outline Button
</Button>

// With icon
<Button>
  <Plus className="mr-2 h-4 w-4" />
  Add Item
</Button>

// As a link
<Button asChild>
  <a href="/dashboard">Go to Dashboard</a>
</Button>
```

## Variants

| Variant       | Description                          | Use Case                   |
| ------------- | ------------------------------------ | -------------------------- |
| `default`     | Primary button with solid background | Main actions, CTAs         |
| `destructive` | Red styling for dangerous actions    | Delete, remove operations  |
| `outline`     | Border with transparent background   | Secondary actions          |
| `secondary`   | Muted appearance                     | Less important actions     |
| `ghost`       | Minimal styling with hover effects   | Subtle interactions        |
| `link`        | Text link appearance                 | Navigation, external links |

## Sizes

| Size      | Height | Padding | Use Case                  |
| --------- | ------ | ------- | ------------------------- |
| `sm`      | 32px   | 12px    | Compact interfaces        |
| `default` | 36px   | 16px    | Standard use              |
| `lg`      | 40px   | 24px    | Emphasis, primary actions |
| `icon`    | 36px   | Square  | Icon-only buttons         |

## Props

| Prop        | Type            | Default     | Description             |
| ----------- | --------------- | ----------- | ----------------------- |
| `variant`   | `ButtonVariant` | `"default"` | Visual style variant    |
| `size`      | `ButtonSize`    | `"default"` | Button size             |
| `asChild`   | `boolean`       | `false`     | Render as child element |
| `disabled`  | `boolean`       | `false`     | Disable the button      |
| `className` | `string`        | -           | Additional CSS classes  |
| `children`  | `ReactNode`     | -           | Button content          |

## TypeScript

```tsx
import { ButtonProps, ButtonVariant, ButtonSize } from "./components/Button";

// Custom button component
const CustomButton: React.FC<ButtonProps> = ({
  variant = "default",
  ...props
}) => {
  return <Button variant={variant} {...props} />;
};

// Type-safe variant
const variant: ButtonVariant = "outline"; // ✅ Type-safe
const invalidVariant: ButtonVariant = "invalid"; // ❌ TypeScript error
```

## Accessibility

The Button component follows WCAG guidelines:

- **Keyboard Navigation**: Supports Space and Enter keys
- **Focus Management**: Visible focus indicators
- **Screen Readers**: Proper semantic markup
- **Disabled State**: Communicated to assistive technology
- **Icon Labels**: Support for `aria-label` on icon buttons

```tsx
// Good: Icon button with label
<Button variant="ghost" size="icon" aria-label="Delete item">
  <Trash2 className="h-4 w-4" />
</Button>

// Good: Disabled state
<Button disabled>
  Processing...
</Button>
```

## Styling

### Custom Colors

Override CSS custom properties:

```css
:root {
  --primary: 220 14% 96%;
  --primary-foreground: 220 9% 46%;
  /* ... other variables */
}
```

### Custom Classes

```tsx
<Button className="w-full hover:scale-105 transition-transform">
  Custom Styled Button
</Button>
```

## Common Patterns

### Form Actions

```tsx
<div className="flex gap-2 justify-end">
  <Button variant="outline" type="button">
    Cancel
  </Button>
  <Button type="submit">Save Changes</Button>
</div>
```

### Icon Buttons

```tsx
<div className="flex gap-1">
  <Button variant="ghost" size="icon" aria-label="Edit">
    <Edit className="h-4 w-4" />
  </Button>
  <Button variant="ghost" size="icon" aria-label="Delete">
    <Trash2 className="h-4 w-4" />
  </Button>
</div>
```

### Loading States

```tsx
const [loading, setLoading] = useState(false);

<Button disabled={loading}>{loading ? "Saving..." : "Save"}</Button>;
```

### Navigation

```tsx
import { Link } from "react-router-dom";

<Button asChild>
  <Link to="/dashboard">
    <Dashboard className="mr-2 h-4 w-4" />
    Go to Dashboard
  </Link>
</Button>;
```

## Best Practices

1. **Consistent Variants**: Use the same variants for similar actions across your app
2. **Appropriate Sizing**: Match button size to interface density
3. **Icon Guidelines**: Use 16px icons (h-4 w-4) for optimal balance
4. **Loading States**: Always disable buttons during async operations
5. **Accessibility**: Include `aria-label` for icon-only buttons
6. **Color Contrast**: Ensure sufficient contrast for all variants

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Dependencies

- `@radix-ui/react-slot`: Polymorphic component support
- `class-variance-authority`: Variant management
- `clsx`: Conditional classes
- `tailwind-merge`: Tailwind class merging
- `lucide-react`: Icons (peer dependency)

## Migration Guide

### From v1.0 to v2.0

```tsx
// Old
<Button type="primary" size="large">Button</Button>

// New
<Button variant="default" size="lg">Button</Button>
```

### From HTML button

```tsx
// Old
<button className="btn btn-primary">Button</button>

// New
<Button variant="default">Button</Button>
```

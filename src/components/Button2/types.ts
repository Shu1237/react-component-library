import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../ui/button";

// Export the button variants type
export type ButtonVariants = VariantProps<typeof buttonVariants>;

// Export individual variant types for better intellisense
export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

// Complete button props interface
export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  /**
   * Render as a child element. When true, the button will render as its child component
   * while maintaining all button styling. Useful for rendering buttons as links or other elements.
   */
  asChild?: boolean;

  /**
   * The visual style variant of the button
   * @default "default"
   */
  variant?: ButtonVariant;

  /**
   * The size of the button
   * @default "default"
   */
  size?: ButtonSize;
}

// Export component type for external usage
export type ButtonComponent = React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>;

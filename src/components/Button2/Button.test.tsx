import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./index";
import { Settings } from "lucide-react";

describe("Button Component", () => {
  // Basic rendering tests
  describe("Rendering", () => {
    it("renders button with text", () => {
      render(<Button>Click me</Button>);
      expect(
        screen.getByRole("button", { name: "Click me" })
      ).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      render(<Button className="custom-class">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class");
    });

    it("renders as child component when asChild is true", () => {
      render(
        <Button asChild>
          <a href="/test">Link Button</a>
        </Button>
      );
      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/test");
    });
  });

  // Variant tests
  describe("Variants", () => {
    it("applies default variant classes", () => {
      render(<Button variant="default">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-primary", "text-primary-foreground");
    });

    it("applies destructive variant classes", () => {
      render(<Button variant="destructive">Delete</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-destructive", "text-white");
    });

    it("applies outline variant classes", () => {
      render(<Button variant="outline">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("border", "bg-background");
    });

    it("applies secondary variant classes", () => {
      render(<Button variant="secondary">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-secondary", "text-secondary-foreground");
    });

    it("applies ghost variant classes", () => {
      render(<Button variant="ghost">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("hover:bg-accent");
    });

    it("applies link variant classes", () => {
      render(<Button variant="link">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("text-primary", "underline-offset-4");
    });
  });

  // Size tests
  describe("Sizes", () => {
    it("applies default size classes", () => {
      render(<Button size="default">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-9", "px-4", "py-2");
    });

    it("applies small size classes", () => {
      render(<Button size="sm">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-8", "px-3");
    });

    it("applies large size classes", () => {
      render(<Button size="lg">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-10", "px-6");
    });

    it("applies icon size classes", () => {
      render(
        <Button size="icon">
          <Settings />
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("size-9");
    });
  });

  // State tests
  describe("States", () => {
    it("handles disabled state", () => {
      render(<Button disabled>Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveClass(
        "disabled:pointer-events-none",
        "disabled:opacity-50"
      );
    });

    it("maintains disabled state with asChild", () => {
      render(
        <Button asChild disabled>
          <a href="/test">Link</a>
        </Button>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("aria-disabled", "true");
    });
  });

  // Event handling tests
  describe("Event Handling", () => {
    it("handles click events", () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not fire click when disabled", () => {
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} disabled>
          Click me
        </Button>
      );

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("handles keyboard events", () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Button</Button>);

      const button = screen.getByRole("button");
      button.focus();
      fireEvent.keyDown(button, { key: "Enter" });
      fireEvent.keyDown(button, { key: " " });

      expect(handleClick).toHaveBeenCalledTimes(2);
    });
  });

  // Accessibility tests
  describe("Accessibility", () => {
    it("has proper ARIA attributes", () => {
      render(<Button aria-label="Custom label">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "Custom label");
    });

    it("has data-slot attribute", () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-slot", "button");
    });

    it("supports aria-invalid", () => {
      render(<Button aria-invalid="true">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-invalid", "true");
      expect(button).toHaveClass("aria-invalid:ring-destructive/20");
    });

    it("has proper focus styles", () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "focus-visible:ring-ring/50",
        "focus-visible:ring-[3px]"
      );
    });
  });

  // Icon tests
  describe("With Icons", () => {
    it("renders with icon children", () => {
      render(
        <Button>
          <Settings data-testid="icon" />
          Button Text
        </Button>
      );

      expect(screen.getByTestId("icon")).toBeInTheDocument();
      expect(screen.getByText("Button Text")).toBeInTheDocument();
    });

    it("applies icon-specific classes", () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "[&_svg]:pointer-events-none",
        "[&_svg]:shrink-0"
      );
    });
  });

  // Combination tests
  describe("Variant and Size Combinations", () => {
    it("combines variant and size classes correctly", () => {
      render(
        <Button variant="outline" size="lg">
          Large Outline
        </Button>
      );
      const button = screen.getByRole("button");

      // Should have both variant and size classes
      expect(button).toHaveClass("border", "bg-background"); // outline variant
      expect(button).toHaveClass("h-10", "px-6"); // large size
    });

    it("handles icon size with different variants", () => {
      render(
        <Button variant="destructive" size="icon">
          <Settings />
        </Button>
      );
      const button = screen.getByRole("button");

      expect(button).toHaveClass("bg-destructive"); // destructive variant
      expect(button).toHaveClass("size-9"); // icon size
    });
  });
});

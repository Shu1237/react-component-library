import '@testing-library/jest-dom';

// Extend Jest matchers for TypeScript
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveTextContent(text: string | RegExp): R;
      toHaveClass(...classNames: string[]): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toBeInTheDocument(): R;
      toHaveAttribute(attr: string, value?: string): R;
      toHaveStyle(style: string | Record<string, any>): R;
    }
  }
}

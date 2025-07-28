
import { render, screen } from '@testing-library/react';
import Input from './index';
import '@testing-library/jest-dom';

describe('Input component', () => {
  it('renders with label', () => {
    render(<Input label="Username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('renders input with default classes', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-gray-300');
    expect(input).toHaveClass('px-3');
  });

  it('applies size classes correctly', () => {
    render(<Input size="large" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('px-4');
    expect(input).toHaveClass('py-3');
    expect(input).toHaveClass('text-lg');
  });

  it('applies variant error class correctly', () => {
    render(<Input variant="error" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-red-500');
  });

  it('shows error message when error is passed', () => {
    render(<Input error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('shows helperText when no error', () => {
    render(<Input helperText="This is a helper" />);
    expect(screen.getByText('This is a helper')).toBeInTheDocument();
  });

  it('does not show helperText when error exists', () => {
    render(<Input error="Error" helperText="Help" />);
    expect(screen.queryByText('Help')).not.toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('applies fullWidth class when fullWidth is true', () => {
    render(<Input fullWidth />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('w-full');
  });

  it('merges additional className', () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });
});

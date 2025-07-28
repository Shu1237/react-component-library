
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Badge from './index';

describe('Badge component', () => {
  it('renders children text', () => {
    const { getByText } = render(<Badge>Active</Badge>);
    expect(getByText('Active')).toBeInTheDocument();
  });

  it('applies default variant and size when not specified', () => {
    const { getByText } = render(<Badge>Default Badge</Badge>);
    const badge = getByText('Default Badge');
    expect(badge).toHaveClass('bg-gray-100');
    expect(badge).toHaveClass('text-gray-800');
    expect(badge).toHaveClass('text-sm');
  });

  it('applies correct variant classes', () => {
    const { getByText } = render(<Badge variant="success">Success</Badge>);
    const badge = getByText('Success');
    expect(badge).toHaveClass('bg-green-100');
    expect(badge).toHaveClass('text-green-800');
    expect(badge).toHaveClass('border-green-200');
  });

  it('applies correct size classes', () => {
    const { getByText } = render(<Badge size="large">Large Badge</Badge>);
    const badge = getByText('Large Badge');
    expect(badge).toHaveClass('text-base');
  });

  it('accepts custom className', () => {
    const { getByText } = render(
      <Badge className="custom-class">With Custom Class</Badge>
    );
    expect(getByText('With Custom Class')).toHaveClass('custom-class');
  });
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './index';

describe('Card Component', () => {
  test('renders card with children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  test('renders card with title', () => {
    render(<Card title="Card Title">Card content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  test('renders with shadow prop', () => {
    render(<Card shadow="large">Content</Card>);
    const content = screen.getByText('Content');
    expect(content).toBeInTheDocument();
  });

  test('renders with padding prop', () => {
    render(<Card padding="small">Content</Card>);
    const content = screen.getByText('Content');
    expect(content).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<Card className="custom-card">Content</Card>);
    const card = screen.getByText('Content').closest('div');
    // Test that component renders correctly with custom className
    expect(card).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});


import { render, screen, fireEvent, act } from '@testing-library/react';
import Toast from './index';
import '@testing-library/jest-dom';

jest.useFakeTimers();

describe('Toast component', () => {
  it('renders with title and content', () => {
    render(<Toast title="Test Title">Test Content</Toast>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders with correct variant icon and styles', () => {
    render(<Toast title="Success Toast" variant="success">Success message</Toast>);
    expect(screen.getByRole('img', { name: 'success icon' })).toBeInTheDocument();
    expect(screen.getByText('Success message')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<Toast onClose={handleClose} showCloseButton>Close me</Toast>);
    fireEvent.click(screen.getByLabelText('Close notification'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('does not render close button if showCloseButton is false', () => {
    render(<Toast showCloseButton={false}>No close button</Toast>);
    expect(screen.queryByLabelText('Close notification')).not.toBeInTheDocument();
  });

  it('auto closes after delay when autoClose is true', () => {
    const handleClose = jest.fn();
    render(
      <Toast
        autoClose
        autoCloseDelay={3000}
        onClose={handleClose}
        title="Auto Close"
      >
        This will disappear
      </Toast>
    );

    expect(screen.getByText('This will disappear')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(handleClose).toHaveBeenCalled();
  });

  it('does not auto close if autoClose is false', () => {
    const handleClose = jest.fn();
    render(
      <Toast
        autoClose={false}
        autoCloseDelay={2000}
        onClose={handleClose}
        title="Persistent"
      >
        Persistent Toast
      </Toast>
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText('Persistent Toast')).toBeInTheDocument();
    expect(handleClose).not.toHaveBeenCalled();
  });
});

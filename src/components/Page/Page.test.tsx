
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from './index';

describe('Page component', () => {
  it('renders title and children', () => {
    render(
      <Page title="Test Title">
        <p>Test Children</p>
      </Page>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });
});

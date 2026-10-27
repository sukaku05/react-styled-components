import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading levels 1-6 as the matching HTML tags', () => {
  render(<App />);
  for (let level = 1; level <= 6; level++) {
    const el = screen.getByText(`Heading ${level}`);
    expect(el.tagName).toBe(`H${level}`);
  }
});

test('renders button variants', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Secondary' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Danger' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
});

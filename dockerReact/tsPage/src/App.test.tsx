import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Boniatoasdf text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Boniatoasdf/i);
  expect(linkElement).toBeInTheDocument();
});
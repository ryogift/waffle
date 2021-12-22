import { render, screen } from '@testing-library/react';
import Sample from './Sample';

test('renders learn react col', () => {
  render(<Sample />);
  const colElement = screen.getByText(/1 of 2/i);
  expect(colElement).toBeInTheDocument();
});

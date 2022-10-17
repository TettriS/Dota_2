import { render, screen } from '@testing-library/react';
import App from '../pages/home/App';

test('renders learn react anchor', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

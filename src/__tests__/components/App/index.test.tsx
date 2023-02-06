import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../../../components/App';

it('renders welcome message', () => {
  render(<App />);

  expect(screen.getByText('Start Project')).toBeInTheDocument();
});

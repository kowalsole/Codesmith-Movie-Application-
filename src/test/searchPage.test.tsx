import { render, screen } from '@testing-library/react'
import SearchPage from '../pages/SearchPage';

// Test SearchPage renders input + button
describe('SearchPage', () => {

  it('renders input properly', () => {
    render(<SearchPage />);
    expect(screen.getByPlaceholderText(/Search for a movie.../i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search for a movie.../i)).toBeInTheDocument();
  });

  it('renders button properly', ()=>{
    render(<SearchPage />);
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', {name: /Searching.../i})).not.toBeInTheDocument();
  })

});
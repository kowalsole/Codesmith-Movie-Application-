import { render, screen } from '@testing-library/react'
import SearchResults from '../components/SearchResults';

// Test SearchResults renders list

describe('SearchResults', () => {
  it('renders loading state', () => {
    render(
      <SearchResults
        results={null}
        isLoading={true}
        error={null}
      />
    )

    expect(
      screen.getByText(/loading results/i)
    ).toBeInTheDocument()
  })

  it('renders error message', () => {
    render(
      <SearchResults
        results={null}
        isLoading={false}
        error="Something went wrong"
      />
    )

    expect(
      screen.getByText(/error: something went wrong/i)
    ).toBeInTheDocument()
  })

  it('renders no results message when description is empty', () => {
    render(
      <SearchResults
        results={{ description: [] }}
        isLoading={false}
        error={null}
      />
    )

    expect(
      screen.getByText(/no results found/i)
    ).toBeInTheDocument()
  })

  it('renders movie results when data is provided', () => {
    const mockResults = {
      description: [
        { '#IMDB_ID': 'tt0133093', title: 'The Matrix' },
        { '#IMDB_ID': 'tt1375666', title: 'Inception' },
      ],
    }

    render(
      <SearchResults
        results={mockResults}
        isLoading={false}
        error={null}
      />
    )

    expect(
      screen.getByText(/found 2 results/i)
    ).toBeInTheDocument()
  })
})

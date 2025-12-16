import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
    it('renders properly', () => {
        render(<App />)
        expect(screen.getByText(/Movie Search/i)).toBeInTheDocument()
    })
})
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'


describe('header component', () => {

    it('should display text', () => {
        render(<Header />) //no props
        const headingElement = screen.getByText(/practice/i) //regex
        expect(headingElement).toBeInTheDocument()
    })

    it('should get text by role', () => {
        render(<Header />) //no props
        const headingText = screen.getByRole('heading')
        expect(headingText).toBeInTheDocument()
    })

    it('should get text by findBy', async () => {
        render(<Header />) //no props
        const headingText = await screen.findByText(/practice/i)
        expect(headingText).toBeInTheDocument()
    })

    it('should use query by', () => {
        render(<Header />) //no props
        const headingText = screen.queryByText(/Header/i)
        expect(headingText).not.toBeInTheDocument()
    })
})

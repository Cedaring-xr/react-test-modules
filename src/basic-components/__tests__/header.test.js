import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'

describe('header component', () => {
    it('should render the component', () => {
        render(<Header />) 
        const headingElement = screen.getByRole('heading', {level: 3})
        expect(headingElement).toBeInTheDocument()
        expect(headingElement).toHaveTextContent('Practice with react components and testing')
    })
})

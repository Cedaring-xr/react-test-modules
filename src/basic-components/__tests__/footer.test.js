import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../Footer'

describe('footer component', () => {
    it('should render the component', () => {
        render(<Footer />) 
        const headingElement = screen.getByRole('heading', {level: 3})
        expect(headingElement).toBeInTheDocument()
        expect(headingElement).toHaveTextContent('End')
    })
})

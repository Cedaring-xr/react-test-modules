import { render, screen, cleanup } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ToggleBtns from '../ToggleBtns'


describe('ToggleBtns component functionality', () => {
    afterEach(() => {
        cleanup()
    })
    it('should render the component', () => {
        render(<ToggleBtns/>)
        const headerElement = screen.getByRole('heading', {name: 'ToggleBtns'})
        const buttons = screen.getAllByRole('button')
        expect(headerElement).toBeInTheDocument()
        expect(buttons).toHaveLength(3)
    })
    it('should be able to toggle status on the red button', async () => {
        user.setup()
        render(<ToggleBtns/>)
        const redButtonElement = screen.getByText('Light Red')
        expect(redButtonElement).toBeInTheDocument()
        await user.click(redButtonElement)
        expect(redButtonElement).toHaveTextContent('Dark Red')
    })
    it('should be able to toggle status on the green button', async () => {
        user.setup()
        render(<ToggleBtns/>)
        const greenButtonElement = screen.getByText('Light Green')
        expect(greenButtonElement).toBeInTheDocument()
        await user.click(greenButtonElement)
        expect(greenButtonElement).toHaveTextContent('Dark Green')
    })
    it('should be able to toggle status on the blue button', async () => {
        user.setup()
        render(<ToggleBtns/>)
        const blueButtonElement = screen.getByText('Light Blue')
        expect(blueButtonElement).toBeInTheDocument()
        await user.click(blueButtonElement)
        expect(blueButtonElement).toHaveTextContent('Dark Blue')
    })
})

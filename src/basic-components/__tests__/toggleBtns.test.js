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
    it.todo('should be able to toggle status on the red button')
    it.todo('should be able to toggle status on the green button')
    it.todo('should be able to toggle status on the blue button')
})

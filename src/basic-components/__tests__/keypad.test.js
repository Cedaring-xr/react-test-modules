import { render, screen, cleanup } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Keypad from '../Keypad'

describe('keypad component', () => {
    describe('Main path functionality', () => {
        afterEach(() => {
            cleanup()
        })
        it('should render keypad component', () => {
            render(<Keypad/>)
            const keypadElement = screen.getByRole('heading', {name: 'Keypad'})
            const keys = screen.getAllByRole('listitem')
            expect(keypadElement).toBeInTheDocument()
            expect(keys).toHaveLength(10)
        })
        it('should not display a generated code at start', () => {
            render(<Keypad/>)
            const newCode = screen.getByText('generated code', { exact: false})
            expect(newCode).not.toHaveTextContent(/[0-9]/)
        })
        it('should be able to generate a new answer code', async () => {
            user.setup()
            render(<Keypad/>)
            const generateCodeElement = screen.getByRole('button', {name: 'Generate New Code'})
            const newCode = screen.getByText('generated code', { exact: false})
            expect(generateCodeElement).toBeInTheDocument()
            await user.click(generateCodeElement)
            expect(newCode).toHaveTextContent(/[0-9]/)
        })
        it('should be able to enter a keypad by pressing buttons',  () => {
            const enteredKeypadCombo = 4832
            render(<Keypad/>)

        })
        it('should be able to clear/reset to blank input', () => {
            render(<Keypad/>);
        })
        it('should automatically submit code on 4th keypress',  () => {
            render(<Keypad/>);
            
        })
        it('should check input vs answer',  () => {
            render(<Keypad/>);
            
        })
        it('should display if the correct key was input',  () => {
            render(<Keypad/>);
            
        })
    })
    describe.skip('edge case functionality', () => {
        it('can register keypress instead of clicks',  () => {
            render(<Keypad/>);
            
        })

        it('should not genreate numbers less than 4 digits', () => {
            render(<Keypad />)
        })
    })
})

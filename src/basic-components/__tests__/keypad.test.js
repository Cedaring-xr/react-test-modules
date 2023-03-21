import { render, screen, cleanup } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Keypad from '../Keypad'

describe('keypad component', () => {
    afterEach(() => {
        cleanup()
    })
    describe('Main path functionality', () => {
        it('should render keypad component', () => {
            render(<Keypad/>)
            const keypadElement = screen.getByRole('heading', {name: 'Keypad'})
            const keys = screen.getAllByRole('listitem')
            expect(keypadElement).toBeInTheDocument()
            expect(keys).toHaveLength(10)
        })
        it('should not display a generated code at start', () => {
            render(<Keypad/>)
            const newCode = screen.getByText('generated code is:', { exact: false})
            expect(newCode).not.toHaveTextContent(/[0-9]/)
        })
        it('should be able to generate a new answer code', async () => {
            user.setup()
            render(<Keypad/>)
            const generateCodeElement = screen.getByRole('button', {name: 'Generate New Code'})
            const newCode = screen.getByText('generated code is:', { exact: false})
            expect(generateCodeElement).toBeInTheDocument()
            await user.click(generateCodeElement)
            expect(newCode).toHaveTextContent(/[0-9]/)
        })
        it('should be able to clear/reset to blank input', async () => {
            user.setup()
            render(<Keypad/>)
            const clearInputElement = screen.getByRole('button', {name: 'Clear Input Code'})
            const inputCodeElement = screen.getByText('Input code is:', {exact:false})
            const keypadKey = screen.getByRole('button', {name:'0'})
            await user.click(keypadKey)
            expect(inputCodeElement).toHaveTextContent('0')
            await user.click(clearInputElement)
            expect(inputCodeElement).not.toHaveTextContent('0')
        })
        xit('should check input vs answer',  () => {
            render(<Keypad/>);
            
        })
        xit('should display if the correct code was input',  () => {
            render(<Keypad/>);
            
        })
    })
    describe('edge case functionality', () => {
        xit('can register keypress instead of clicks',  () => {
            render(<Keypad/>);
            
        })

        it('should not genreate codes less than 4 digits', async () => {
            user.setup()
            render(<Keypad />)
            const generateNewCode = screen.getByRole('button', {name: 'Generate New Code'})
            const newCode = screen.getByText('generated code is:', { exact: false})
            await user.click(generateNewCode)
            expect(newCode).toHaveTextContent(/(?:\bdigit-|\s|^)(\d{4})(?=[.?\s]|-digit\b|$)/gi)  //regex for contains 4 digit number
        })
    })
})

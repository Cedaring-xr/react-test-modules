import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import InputFormSimple from '../InputFormSimple'

describe('InputFormSimple component', () => {
    describe('main functionality', () => {
        it('should render the component', () => {
            render(<InputFormSimple />) 
            const headingElement = screen.getByRole('heading', {level: 3})
            expect(headingElement).toBeInTheDocument()
            expect(headingElement).toHaveTextContent('Simple Input Form')
        })
        it('should be able to type in the name fields', async () => {
            user.setup()
            render(<InputFormSimple />)
            const firstnameElement = screen.getByPlaceholderText('John')
            const lastnameElement = screen.getByPlaceholderText('Smith')
            expect(firstnameElement).toBeInTheDocument()
            expect(lastnameElement).toBeInTheDocument()
            await user.type(firstnameElement, 'hello')
            expect(firstnameElement).toHaveValue('hello')
            await user.type(lastnameElement, 'world')
            expect(lastnameElement).toHaveValue('world')
        })
        it('should be able to select age from dropdown options', async () => {
            user.setup()
            render(<InputFormSimple />)
            const ageSelectElement = screen.getAllByRole('menu')[0]
            expect(ageSelectElement).toBeInTheDocument()
            expect(ageSelectElement).toHaveValue('Select Age')
            await user.click(ageSelectElement)
            const ageOptions = screen.getAllByRole('option', {name: /[0-9]/})
            expect(ageOptions).toHaveLength(100)
            await fireEvent.change(ageSelectElement, { target: { value: "3" } });
            expect(ageSelectElement).toHaveValue('3')
        })
        it('should be able to select country from dropdown options', async () => {
            user.setup()
            render(<InputFormSimple/>)
            const countrySelectElement = screen.getAllByRole('menu')[1]
            expect(countrySelectElement).toBeInTheDocument()
            expect(countrySelectElement).toHaveValue('-- Select Country --')
            await user.click(countrySelectElement)
            const countryOptions = screen.getAllByRole('option', {name:  /[a-z]/})
            expect(countryOptions).toHaveLength(245)
            await fireEvent.change(countrySelectElement, { target: {value: 'Cayman Islands'}})
            expect(countrySelectElement).toHaveValue('Cayman Islands')
        })
        it('should be able to toggle checkbox terms', async () => {
            user.setup()
            render(<InputFormSimple />)
            const termsCheckboxElement = screen.getByRole('checkbox')
            expect(termsCheckboxElement).not.toBeChecked()
            await user.click(termsCheckboxElement)
            expect(termsCheckboxElement).toBeChecked()
        })
        it.todo('should validate required fields before submission')
        it.todo('should display form results after submission')
        it.todo('should be able to click output form button')
        it.todo('should correctly display all countries from json data')
    })
    describe('edge case functionality', () => {
        it.todo('should provide feedback on required inputs')
        it.todo('should not be able to submit form without required fields')
        it.todo('should display only complete information in output field')
    })
})

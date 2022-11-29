import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoMain from '../todo2/TodoMain'
import renderer from 'react-test-renderer'


describe('tests Todo main parent component', () => {

    afterEach(() => {
        cleanup()
    })

    it('should input text in the input', () => {
        render(<TodoMain/>)
        const inputElement = screen.getByPlaceholderText('add item here...')
        expect(inputElement).toBeVisible()

    })

    // it('should input text in the input', async () => {
    //     render(<TodoMidlayer
    //                 todos = {[]}
    //                 toggleTodo = {mockedToggleTodo}
        
    //     />)
    //     const inputElement = screen.getByPlaceholderText('add item here...')
    //     fireEvent.change(inputElement, { Target: {value: 'add test todo item'} })
    //     expect(inputElement.value).toBe('add test todo item')
    // })

    
})



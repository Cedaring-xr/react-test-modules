import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoMidlayer from '../todo2/TodoMidlayer'
import renderer from 'react-test-renderer'


const mockedToggleTodo = jest.fn()

describe('tests Todo Lists inner list component', () => {

    afterEach(() => {
        cleanup()
    })

    it('should input text in the input', async () => {
        render(<TodoMidlayer
                    todos = {[]}
                    toggleTodo = {mockedToggleTodo}
        
        />)
        // what to test here?
    })
})

import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo1 from '../todo1/Todo1'
import renderer from 'react-test-renderer'

afterEach(() => {
    cleanup()
})

test('should render non-completed todo', () => {
    const mockTodo = {id: 2, title: 'test task 1', completed: false}
    render(<Todo1 todo={mockTodo}/>)
    const element = screen.getByTestId('todo-2')
    expect(element).toBeDefined();
    expect(element).not.toContainHTML('strike')
})

test('should render completed todo', () => {
    const mockTodo = {id: 2, title: 'test task 2', completed: true}
    render(<Todo1 todo={mockTodo}/>)
    const element = screen.getByTestId('todo-2')
    expect(element).toBeDefined();
    expect(element).toContainHTML('strike')
})

// snapshot component testing
test('should match snapshot of TodoList', () => {
    const mockTodo = {id: 2, title: 'test task 2', completed: true}
    const tree = renderer.create(<Todo1 todo={mockTodo}/>).toJSON()
    expect(tree).toMatchSnapshot()
})
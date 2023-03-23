import { render, screen, cleanup } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import DotMaker from '../DotMaker'


describe('DotMaker component', () => {
    describe('main functionality', () => {
        afterEach(() => {
            cleanup()
        })
        it('should render the component', () => {
            render(<DotMaker />) 
            const headingElement = screen.getByRole('heading', {level: 2})
            expect(headingElement).toBeInTheDocument()
            expect(headingElement).toHaveTextContent('DotMaker')
        })
        it('should start the initial count at 0', () => {
            render(<DotMaker/>)
            const dotCountElement = screen.getByText('count is:', {exact: false})
            expect(dotCountElement).toBeInTheDocument()
            expect(dotCountElement).toHaveTextContent('0')
        })
        it('should be able to create new dots when clicking inside the box', async () => {
            user.setup()
            render(<DotMaker/>)
            const dotCountElement = screen.getByText('count is:', {exact: false})
            const dotBoxElement = screen.getByRole('customBox')
            expect(dotBoxElement).toBeInTheDocument()
            await user.click(dotBoxElement)
            expect(dotCountElement).toHaveTextContent('1')
        })
        it('should be able to undo a dot when undo button is clicked', async () => {
            user.setup()
            render(<DotMaker/>)
            const dotCountElement = screen.getByText('count is:', {exact: false})
            const dotBoxElement = screen.getByRole('customBox')
            const undoButton = screen.getByRole('button', {name: 'Undo'})
            expect(undoButton).toBeInTheDocument()
            for(let i = 0; i < 5; i++) {
                await user.click(dotBoxElement)
            }
            expect(dotCountElement).toHaveTextContent('5')
            await user.click(undoButton)
            expect(dotCountElement).toHaveTextContent('4')
        })
        it('should be able to redo a dot creation when redo button is clicked', async () => {
            user.setup()
            render(<DotMaker/>)
            const dotCountElement = screen.getByText('count is:', {exact: false})
            const dotBoxElement = screen.getByRole('customBox')
            const undoButton = screen.getByRole('button', {name: 'Undo'})
            const redoButton = screen.getByRole('button', {name: 'Redo'})
            expect(undoButton).toBeInTheDocument()
            expect(redoButton).toBeInTheDocument()
            for(let i = 0; i < 5; i++) {
                await user.click(dotBoxElement)
            }
            await user.click(undoButton)
            expect(dotCountElement).toHaveTextContent('4')
            await user.click(redoButton)
            expect(dotCountElement).toHaveTextContent('5')
        })
    })
    describe('edge case functionality', () => {
        afterEach(() => {
            cleanup()
        })
        it('should not be able to go below 0 dots', async () => {
            user.setup()
            render(<DotMaker/>)
            const dotCountElement = screen.getByText('count is:', {exact: false})
            const undoButton = screen.getByRole('button', {name: 'Undo'})
            await user.click(undoButton)
            expect(dotCountElement).toHaveTextContent('0')
        })
        it('should not be able to redo dot creation if undo is not clicked', async () => {
            user.setup()
            render(<DotMaker/>)
            const dotBoxElement = screen.getByRole('customBox')
            const dotCountElement = screen.getByText('count is:', {exact: false})
            const redoButton = screen.getByRole('button', {name: 'Redo'})
            await user.click(dotBoxElement)
            await user.click(redoButton)
            expect(dotCountElement).toHaveTextContent('1')
        })
    })
})

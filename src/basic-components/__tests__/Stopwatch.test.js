import { render, screen, cleanup } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Stopwatch from '../Stopwatch'


describe('Stopwatch component functionality', () => {
    afterEach(() => {
        cleanup()
    })
    it('should render the stopwatch component', () => {
        render(<Stopwatch/>)
        const headerElement = screen.getByRole('heading', {name: 'Stopwatch'})
        expect(headerElement).toBeInTheDocument()
    })
    it('should start at 00:00:00',  () => {
        render(<Stopwatch/>)
        const stopwatchElements = screen.getAllByRole('heading', {level: 2})
        stopwatchElements.forEach(element => {
            expect(element).toHaveTextContent('00')
        });
    })
    xit('should be able to incriment time', async () => {
        user.setup()
        render(<Stopwatch/>);
        const startButton = screen.getAllByRole('button', {name:'start'})
        const stopwatchElements = screen.getAllByRole('heading', {level: 2})
        await user.click(startButton)
        const milli = stopwatchElements[2]
        expect(milli).not.toHaveTextContent('00')
    })

    xit('should show reset and resume button on stop', async () => {
        user.setup()
        render(<Stopwatch/>);
        const startButton = screen.getAllByRole('button', {name:'start'})
    })

    xit('should be able to resume time', async () => {

    })
})

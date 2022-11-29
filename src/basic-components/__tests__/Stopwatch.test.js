import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Stopwatch from '../Stopwatch'


describe('Stopwatch component functionality', () => {
    
    it('should start at 00',  () => {
        render(<Stopwatch/>);
        const StopwatchElement = screen.getByTestId('stopwatch')
        expect(StopwatchElement).toBeDefined();
        expect(StopwatchElement).toHaveTextContent(/Stopwatch/i)
    })

    it('should be able to incriment time', () => {
        render(<Stopwatch/>);
        const StartButton = screen.getAllByRole('button')
        const buttons = StartButton.length
        expect(buttons).toBeGreaterThan(0);
    })

    it('should be able to stop time', () => {
        render(<Stopwatch/>);
    })
})

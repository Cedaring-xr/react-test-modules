import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Stopwatch from '../Stopwatch'


describe('Stopwatch component functionality', () => {
    render(<Stopwatch/>);


    it('should start at 00',  () => {
        const StopwatchElement = screen.getAllByTestId('stopwatch')
        expect(StopwatchElement).toBeDefined();
        // expect(StopwatchElement).toHaveTextContent('Stopwatch')
    })

    it('should be able to incriment time', () => {
        const StartButton = screen.getAllByRole('button')
        expect(StartButton).toBeGreaterThan(0);
    })

    it('should be able to stop time', () => {
       
    })
})

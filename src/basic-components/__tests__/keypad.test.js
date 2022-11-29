import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Keypad from '../Keypad'

describe.skip('keypad component functionality', () => {
    describe('Main path functionality', () => {
        it('should display a generated answer code',  () => {
            render(<Keypad/>);
            
        })
        it('should be able to generate a new answer code',  () => {
            render(<Keypad/>);
            
        })
        it('should be able to press key buttons',  () => {
            render(<Keypad/>);
            
        })
        it('should automatically submit code on 4th keypress',  () => {
            render(<Keypad/>);
            
        })
        it('should be able to clear/reset to blank input', () => {
            render(<Keypad/>);
        })
        it('should check input vs answer',  () => {
            render(<Keypad/>);
            
        })
        it('should display if the correct key was input',  () => {
            render(<Keypad/>);
            
        })
    })
    describe('edge case functionality', () => {
        it('can register keypress instead of clicks',  () => {
            render(<Keypad/>);
            
        })

        it('should not genreate numbers less than 4 digits', () => {
            render(<Keypad />)
        })
    })
})

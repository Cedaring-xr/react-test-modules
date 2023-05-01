import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import RadialMenu from '../RadialMenu'

describe('RadialMenu component', () => {
    describe('Main path functionality', () => {
        it('should render RadialMenu component', () => {
            render(<RadialMenu/>)
            const headerElement = screen.getByRole('heading', {name: 'Radial hover menu'})
            const open = screen.getAllByRole('heading', {level: 2})
            expect(headerElement).toBeInTheDocument()
            open.forEach(element => {
                expect(element).toBeInTheDocument()
            });
        })

        it('should display menu options when hovering over main menu button', async () => {
            user.setup()
            render(<RadialMenu/>)
            const menu = screen.getByText('Menu')
            await user.hover(menu)
            const options = screen.getAllByRole('button')
            expect(options).toHaveLength(7)
        })

        it('should change center menu button from menu to cancel when hovering', async () => {
            user.setup()
            render(<RadialMenu />)
            const menu = screen.getByText('Menu')
            await user.hover(menu)
            expect(menu).toHaveTextContent('Cancel')
        })
        it.todo('should change output class when clicking on menu button colors')
        it.todo('should be able to cancel all color changes when clicking on cancel')
    })
    describe('edge case functionality', () => {
        it.todo('should have additional styles when hovering over menu options')
    })
})

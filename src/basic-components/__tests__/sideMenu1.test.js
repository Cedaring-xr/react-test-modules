import { render, screen, cleanup } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import SideMenu1 from '../SideMenu1'

describe('SideMenu1 component', () => {
    afterEach(() => {
        cleanup()
    })
    describe('Main path functionality', () => {
        it('should render SideMenu1 component', () => {
            render(<SideMenu1/>)
            const headerElement = screen.getByRole('heading', {name: 'Slide menu'})
            const open = screen.getAllByRole('heading', {level: 4})
            expect(headerElement).toBeInTheDocument()
            open.forEach(element => {
                expect(element).toBeInTheDocument()
            });
        })
        it('should be able to click open menu', async () => {
            user.setup()
            render(<SideMenu1/>)
            const open = screen.getByText('open', {exact: false})
            await user.click(open)
            const list = screen.getAllByRole('list')
            expect(list[0]).toBeInTheDocument()
        })
    })
})

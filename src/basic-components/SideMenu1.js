import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';

export default function SideMenu1() {
    const [menu, setMenu] = useState(false) // menu open
    const [active, setActive] = useState('') //active menu item maybe?

    const toggleOpen = () => {
        setMenu(!menu)
    }

    const activePage = () => {
        setActive('page1')
    }

  return (
    <section>
        <div className='widget-box'>
            <h1>Slide menu</h1>
            <div className='side-menu-open' onClick={toggleOpen}>
                <h4>{!menu ? 'Open' : 'Close'}</h4>
                <h4>{!menu ? '====>' : '<===='}</h4>
            </div>
            {menu ? <ul className="side-menu">
                <li className="menu-item">
                    <p className="menu-item-text">Item 1</p>
                </li>
                <li className="menu-item">
                    <p className="menu-item-text">Item 2</p>
                </li>
                <li className="menu-item">
                    <p className="menu-item-text">Item 3</p>
                </li>
                <li className="menu-item">
                    <p className="menu-item-text">Item 4</p>
                </li>
                    
            </ul> : ''}
            <div className='active-page'>{active}  active page</div>
        </div>
    </section>
  )
}

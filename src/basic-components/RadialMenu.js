import React, { useState } from 'react'

const RadialMenu = () => {
    const [menu, setMenu] = useState(false)
    const [outputColor, setOutputColor] = useState('')

    const run = () => {
        setMenu(!menu)
    }

    const handleClick = (color) => {
        // console.log(color)
        setOutputColor(color)
    }

  return (
    <section className='radial-menu'>
        <h2>Radial hover menu</h2>
        <div className='radial-container'>
            <div className='hover-container' onMouseEnter={run} onMouseLeave={run}>
                <button className='radial-center-btn' onClick={() => setOutputColor('')}>{menu ? `Cancel` : `Menu`}</button>
                <button className='radial-select-btn' id='one' onClick={() => handleClick('red')}>One</button>
                <button className='radial-select-btn' id='two' onClick={() => handleClick('teal')}>Two</button>
                <button className='radial-select-btn' id='three' onClick={() => handleClick('pink')}>Three</button>
                <button className='radial-select-btn' id='four' onClick={() => handleClick('yellow')}>Four</button>
                <button className='radial-select-btn' id='five' onClick={() => handleClick('blue')}>Five</button>
                <button className='radial-select-btn' id='six' onClick={() => handleClick('green')}>Six</button>
            </div>
        </div>
        <div className='output-box'>
            <div className={`output-color ${outputColor ? outputColor : ''}`}>{outputColor}</div>
        </div>
    </section>
  )
}

export default RadialMenu
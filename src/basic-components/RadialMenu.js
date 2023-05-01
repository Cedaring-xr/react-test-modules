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
                <div className='radial-center-btn' onClick={() => setOutputColor('')}>{menu ? `Cancel` : `Menu`}</div>
                <div className='radial-select-btn' id='one' onClick={() => handleClick('red')}>One</div>
                <div className='radial-select-btn' id='two' onClick={() => handleClick('teal')}>Two</div>
                <div className='radial-select-btn' id='three' onClick={() => handleClick('pink')}>Three</div>
                <div className='radial-select-btn' id='four' onClick={() => handleClick('yellow')}>Four</div>
                <div className='radial-select-btn' id='five' onClick={() => handleClick('blue')}>Five</div>
                <div className='radial-select-btn' id='six' onClick={() => handleClick('green')}>Six</div>
            </div>
        </div>
        <div className='output-box'>
            <div className={`output-color ${outputColor ? outputColor : ''}`}>{outputColor}</div>
        </div>
    </section>
  )
}

export default RadialMenu
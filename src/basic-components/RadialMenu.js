import React, { useState } from 'react'

const RadialMenu = () => {
    const [menu, setMenu] = useState(false)

  return (
    <section className='radial-menu'>
        <h2>Radial hover menu</h2>
        <div className='radial-container'>
            <div className='radial-center-btn' >{menu ? `Menu` : `Cancel`}</div>
            <div className='radial-select-btn' id='one'>One</div>
            <div className='radial-select-btn' id='two'>Two</div>
            <div className='radial-select-btn' id='three'>Three</div>
            <div className='radial-select-btn' id='four'>Four</div>
            <div className='radial-select-btn' id='five'>Five</div>
            <div className='radial-select-btn' id='six'>Six</div>
        </div>
        <div className='output-box'>
            output of radial select
        </div>
    </section>
  )
}

export default RadialMenu
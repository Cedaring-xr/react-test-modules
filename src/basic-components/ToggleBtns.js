import React, { useState } from 'react'

function ToggleBtns() {
    
    const [isRed, toggleRed] = useState(false)
    const [isGreen, toggleGreen] = useState(false)
    const [isBlue, toggleBlue] = useState(false)
    
    
  return (
    <section className='toggle-section'>
        <div>
            <h3>ToggleBtns</h3>
        </div>
        <div className={`color-change-box ${isRed ? 'dark-red' : 'light-red'}`}>
            <button className='toggle-btn' onClick={() => {toggleRed(!isRed)}}>{ !isRed ? 'Light Red' : 'Dark Red' }</button>
        </div>
        <div className={`color-change-box ${isGreen ? 'dark-green' : 'light-green'}`}>
            <button className='toggle-btn' onClick={() => {toggleGreen(!isGreen)}}>{ !isGreen ? 'Light Green' : 'Dark Green' }</button>
        </div>
        <div className={`color-change-box ${isBlue ? 'dark-blue' : 'light-blue'}`}>
            <button className='toggle-btn' onClick={() => {toggleBlue(!isBlue)}}>{ !isBlue ? 'Light Blue' : 'Dark Blue' }</button>
        </div>
    </section>
  )
}

export default ToggleBtns

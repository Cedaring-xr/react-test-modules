import React, { useState, useRef, useEffect } from 'react'

function ToggleBtns() {
    
    const [isRed, toggleRed] = useState(false)
    const [isGreen, toggleGreen] = useState(false)
    const [isBlue, toggleBlue] = useState(false)
    
    
  return (
    <section>
        <div>
            <h3>ToggleBtns</h3>
        </div>
        <ul>
            <button className='toggle' onClick={() => {toggleRed(!isRed)}}>{ !isRed ? 'Light Red' : 'Dark Red' }</button>
            <button className='toggle' onClick={() => {toggleGreen(!isGreen)}}>{ !isGreen ? 'Light Green' : 'Dark Green' }</button>
            <button className='toggle' onClick={() => {toggleBlue(!isBlue)}}>{ !isBlue ? 'Light Blue' : 'Dark Blue' }</button>
        </ul>
    </section>
  )
}

export default ToggleBtns

import React, { useState } from 'react'

function Keypad() {

    const [generated, setGenerated] = useState('')
    const [inputCode, setInputCode] = useState([])
    // const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const numList2 = Array.from(Array(10).keys())

    
    const addNumInput = (number) => {
        console.log(number)
    }

    const newCode = () => {
        console.log('new code')
        const num = Math.floor(Math.random() * 10)
        
        setGenerated(num)
    }

    const clearCode = () => {
        console.log('new code')

    }

  return (
    <section className='keypad-simple'>
        <div>
            <h3>Keypad</h3>
        </div>
        <div className='grid-container'>
            <button className='keypad-btn' onClick={newCode}>Generate New Code</button>
            <button className='keypad-btn'>Clear Input</button>
            <div className='4-digitCode'>generated code is: {generated}</div>
            <div className='4-digitCode'>Input code is: {inputCode}</div>
            <ul className='grid'>
                {numList2.map((number, index) => {
                    return (
                        <li key={index} className='grid-item'>
                            <button className='key-btn'>{number}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}

export default Keypad
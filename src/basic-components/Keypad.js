import React, { useState } from 'react'

function Keypad() {

    let [generated, setGenerated] = useState(null)
    let [inputCode, setInputCode] = useState([])
    const numList = Array.from(Array(10).keys())

    const newCode = () => {
        let numArray = []
        for(let i = 0; i < 4; i++){
            const num = Math.floor(Math.random() * 10)
            numArray.push(num)
        }
        const code = numArray.map(String)
        setGenerated(code)
    }

    const clearCode = () => {
        setGenerated('')
    }

    const clearInput = () => {
        setInputCode([])
    }

    const inputNumber = (number) => {
        // setInputCode(current => [...current, number])
        setInputCode(inputCode => inputCode.concat(number))
        console.log(inputCode)
        // if inputArray = 4, set inputCode
        if(inputCode.length === 4) {
            console.log('submitted')
            matchInput(inputCode)
            clearInput()
        }
    }

    const matchInput = (inputCode) => {
        console.log(inputCode)
        console.log(generated)
        if(inputCode === generated) {
            console.log('success')
        } else {
            console.log('wrong code')
        }
    }

  return (
    <section className='keypad-simple'>
        <div>
            <h3 id='keypad'>Keypad</h3>
        </div>
        <div className='grid-container'>
            <button className='keypad-btn' onClick={newCode}>Generate New Code</button>
            <button className='keypad-btn' onClick={clearCode}>Clear Generated Code</button>
            <button className='keypad-btn' onClick={clearInput}>Clear Input Code</button>
            <div className='4-digitCode'>
                <p>generated code is: {generated}</p>
                <p>Input code is: {inputCode}</p>
            </div>
            <ul className='grid'>
                {numList.map((number, index) => {
                    return (
                        <li key={index} className='grid-item key-button'>
                            <button className='key-btn' onClick={() => inputNumber(number)}>{number}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}

export default Keypad
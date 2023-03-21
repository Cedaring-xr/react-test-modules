import React, { useState } from 'react'

function Keypad() {

    const [generated, setGenerated] = useState(null)
    const [inputCode, setInputCode] = useState([])
    const [outputText, setOutputText] = useState('')

    const numList = Array.from(Array(10).keys())

    const newCode = () => {
        let numArray = []
        for(let i = 0; i < 4; i++){
            const num = Math.floor(Math.random() * 10)
            numArray.push(num)
        }
        const code = numArray.map(Number)
        setGenerated(code)
    }

    const inputNumber = (number) => {
        if(inputCode.length < 4) {
            setInputCode(arr => [...arr, number])
        }
    }

    const clearInput = () => {
        setInputCode([])
        setOutputText('')
    }

    const submitCode = () => {
        if(inputCode.length === 4) {
            matchInput(inputCode)
            setInputCode([])
        }
    }

    const matchInput = (inputCode) => {
        if(JSON.stringify(inputCode) === JSON.stringify(generated)) {  //comparing arrays in js is weird
            setOutputText('Successful code entered')
        } else {
            setOutputText('Incorrect code entered')
        }
    }

  return (
    <section className='keypad-simple'>
        <div>
            <h3 id='keypad'>Keypad</h3>
        </div>
        <div className='grid-container'>
            <button className='keypad-btn' onClick={newCode}>Generate New Code</button>
            <button className='keypad-btn' onClick={() => setGenerated('')}>Clear Generated Code</button>
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
            <h3 className='keycode-check'>{outputText}</h3>
            <button onClick={submitCode}>Submit Code</button>
        </div>
    </section>
  )
}

export default Keypad
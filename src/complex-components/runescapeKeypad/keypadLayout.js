import React, { useState } from 'react'

const KeypadLayout = () => {

    const [generated, setGenerated] = useState(null)
    const [inputCode, setInputCode] = useState([])
    const [outputText, setOutputText] = useState('')
    const [codeState, setcodeState] = useState([])

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
    <section className='runescape-keypad-bankcode'>
        <div>
            <h3 id='keypad'>Keypad bank code</h3>
        </div>
        <div className='outer-grid-container'>
            <button className='keypad-btn' onClick={newCode}>Generate New 4 digit Code</button>
            <button className='keypad-btn' onClick={() => setGenerated('')}>Clear Generated Code</button>
            <button className='keypad-btn' onClick={clearInput}>Clear Input Code</button>
            <div className='code-output'>
                <p>generated code is: {generated}</p>
                <p>Input code is: {inputCode}</p>
            </div>
            <ul className='outer-grid'>
                {numList.map((number, index) => {
                    return (
                        <li key={index} className='grid-item key-button'>
                            <button className='key-btn' onClick={() => inputNumber(number)}>
                                <table className='inner-grid'>
                                    <tbody>
                                        <tr>
                                            {/* display only 1 number per button via class toggle*/}
                                            <td className={codeState? `visible` : `hidden`}>1</td>
                                            <td className='hidden'>2</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </button>
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

export default KeypadLayout
import React, { useState, useEffect } from 'react'
import countries from '../Assets/countries.json'
import { useFormik } from 'formik'

const InputFormSimple = () => {
  const [currentCountries, setCountries] = useState([])
  const [currentAge, setAge] = useState([])

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      country: '',
      terms: '',
    }
  })


  const age = [...Array(100).keys()];

  useEffect(() => {
    setCountries(countries)
  },[])
  useEffect(() => {
    setAge(age)
  },[])

  return (
    <section className='input-form grid-container'>
        <h3>Simple Input Form</h3>
        <div className='form-container grid-item'>
            <form className='form'>
                <label htmlFor='first-name'>First Name</label>
                <input name='first-name' type='text' placeholder='John'></input>
                <label htmlFor='last-name'>Last Name</label>
                <input name='last-name' type='text' placeholder='Smith'></input>
                <label htmlFor='age'>Age Select</label>
                <select name='age' id='age' type='number'>
                  <option> Select Age </option>
                  {
                    currentAge.map((age, index) => {
                      return (
                        <option key={index}>{age}</option>
                      )
                    })
                  }
                </select>
                <label htmlFor='country'>Country</label>
                <select name='country' type='dropdown' placeholder='-- Select Country --'>
                      <option>-- Select Country --</option>
                      {
                        currentCountries.map((country, index) => {
                          return (
                            <option key={index}>{country.name}</option>
                          )
                        })
                      }
                </select>
                <div className='checkbox-area'>
                  <input name='agree' id='terms' type='checkbox'></input>
                  <label htmlFor='agree'>Agree to whatever terms listed</label>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
        <div className='output-container grid-item'>
            <h4>Form Output</h4>
            <div className='form-info'>
            </div>
            <button>Form info is correct</button>
        </div>
    </section>
  )
}

export default InputFormSimple

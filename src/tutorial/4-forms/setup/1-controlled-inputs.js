import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText')
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = ($event) => {
    $event.preventDefault()
    if (firstName && email) { /* //! '' being falsy */
      const person= {firstName, email}
      setPeople( (people) => {
        return[...people, person]
      })
      setFirstName('')
      setEmail('')
    }else {
      console.log('empty values')
    }
  }
  return <>
  <article>
    <form className='form'>
      <div className='form-control'>
        <label htmlFor="firstName">Name :</label>
        <input 
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={($event)=> setFirstName($event.target.value)}  
        />
      </div>
      <div className='form-control'>
        <label htmlFor="email">Email :</label>
        <input 
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={($event=> setEmail($event.target.value))}  
        />
      </div>
      <button type='submit' onClick={handleSubmit}>add person</button>
    </form>
  </article>
  </>
}

export default ControlledInputs

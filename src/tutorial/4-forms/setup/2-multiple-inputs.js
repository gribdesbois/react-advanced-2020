import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText')
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({firstName:'', email:'', age:''})
  const [age, setAge] = useState('')

  const handleChange = ($event) => {
    const name = $event.target.name
    const value = $event.target.value
    setPerson({...person, [name]: value})/* //! DYNAMIC OBJECT KEYS */
  }
  const handleSubmit = ($event) => {
    $event.preventDefault()
    if(person.firstName && person.email && person.age){
      const newPerson = {...person, id: new Date().getTime().toString()}
      setPeople([...people, newPerson])
      setPerson({firstName:'', email:'', age:''})
    }
  }
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='text'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs

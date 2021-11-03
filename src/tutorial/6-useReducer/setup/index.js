import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function
const reducer = (state, action) => {
  console.log(state)
  if(action.type === 'TESTING'){
    return {...state, people: data, isModalOpen:true, modalContent: 'item added'}
  }
  throw new Error('no matching action type')
}
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = ($event) => {
    $event.preventDefault()
    if (name) {
      dispatch({type: 'TESTING'}) /* NAMES DO MATTER IN THIS CASE */
    }else {
      dispatch({type: 'RANDOM'})
    }
  }
  return(
  <>
    {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text"
          value={name}
          onChange={($event)=> setName($event.target.value)}/>
      </div>
      <button type='submit'>add</button>
    </form>
    {state.people.map((person)=> {
      return (
        <div key = { person.id }>
          <h4>{person.name}</h4>
        </div>
      )
    })}
  </>)
}

export default Index

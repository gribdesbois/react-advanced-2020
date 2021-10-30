import React from 'react';
import { Fragment } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [ people, setPeople ] = React.useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <> 
    {
      people.map((person) => {
        const {id, name} = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })
    }
    <button className='btn' onClick={() => setPeople([])}> {/* arrow function to have setPeople invoked only when clicking */}
      clear items
    </button>
    </>
  )
};

export default UseStateArray;

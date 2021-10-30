import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarsons'
const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((resp)=>{
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        }else {
          setIsLoading(false)
          setIsError(true)
        }
      })
      .then((user)=> {
        const {login} = user  /* ONCE WE HAVE THE DATA WE CAN SET BOOLEANS TO TRUE */
        setUser(login)
        setIsLoading(false)
      })
      .catch((error)=>console.log(error)) // ! not triggered by a 404 for example
  
  }, [])
  if(isloading) {
    return (<div>
      <h1>Loading...</h1>
    </div>)
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    )
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
    )
}

export default MultipleReturns

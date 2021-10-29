import React, { useState } from 'react';

const UseStateBasics = () => {
  console.log(useState('hello world'))
  const value = useState(1)[0]
  const handler = useState(1)[1]
  console.log(value, handler)
  return <h2>useState basic example</h2>;
};

export default UseStateBasics;

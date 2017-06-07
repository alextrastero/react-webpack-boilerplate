import React from 'react';
import Input from './react-materialize/Input';

const App = () => {
  const label = 'I am a label';
  const value = 2;

  return (
    <Input type='number' label={label} defaultValue={value} />
  )
};

export default App;

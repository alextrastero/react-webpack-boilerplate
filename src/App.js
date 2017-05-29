import React from 'react';
import Autocomplete from './react-materialize/Autocomplete';

const App = () => {
  const data = {
    one: null,
    two: null
  }
  return (
    <div>
      <Autocomplete data={data} />
    </div>
  )
};

export default App;

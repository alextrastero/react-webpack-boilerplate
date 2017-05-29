import React from 'react';
import Icon from './react-materialize/Icon';
import Button from './react-materialize/Button';

const App = () => {
  return (
    <div>
      <Icon>cloud</Icon>
      <Button waves='light'>button<Icon left>cloud</Icon></Button>
    </div>
  )
};

export default App;

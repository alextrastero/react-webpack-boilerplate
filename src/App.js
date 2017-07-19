import React from 'react';
import { Input, Button } from './react-materialize';

class App extends React.Component {
  render () {
    return (
      <form>
        <Input required />
        <Button type='submit'>send</Button>
      </form>
    );
  }
}

export default App;

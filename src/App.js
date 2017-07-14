import React from 'react';
import { Input } from './react-materialize';

class App extends React.Component {
  render () {
    return (
      <form>
        <Input required />
        <button type='submit'>send</button>
      </form>
    );
  }
}

export default App;

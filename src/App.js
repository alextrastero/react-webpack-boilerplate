import React from 'react';
import { Modal, Button } from './react-materialize';

class App extends React.Component {
  render () {
    return (
      <Modal trigger={<Button>trigger</Button>}>
        <p>here we are</p>
      </Modal>
    );
  }
}

export default App;

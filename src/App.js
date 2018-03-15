import React from 'react';
import { Modal } from './react-materialize';

const App = () => {
  return (
    <Modal
      trigger={<button>peo</button>}
      modalOptions={{'one': 2, 'two': 3}}
      header={'hello'}
    >
      <p>hello</p>
    </Modal>
  );
};

export default App;

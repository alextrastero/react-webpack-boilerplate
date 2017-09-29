import React from 'react';
import { Tabs, Tab } from './react-materialize';

class App extends React.Component {
  render () {
    return (
      <Tabs className='tab-demo z-depth-1'>
        <Tab title='Test 1'>Test 1</Tab>
        <Tab title='Test 2' active>Test 2</Tab>
        <Tab title='Test 3'>Test 3</Tab>
        <Tab title='Test 4'>Test 4</Tab>
      </Tabs>
    );
  }
}

export default App;

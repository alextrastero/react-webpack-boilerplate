import React from 'react';
import { NavItem, Navbar, Icon, Button } from './react-materialize';

class App extends React.Component {
  render () {
    return (
      <Navbar className='container'>
        <NavItem key='foo'>
          <Icon>home</Icon>
          Home
        </NavItem>
      </Navbar>
    );
  }
}

export default App;

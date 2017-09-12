import React from 'react';
import { Navbar, Col, Row, NavItem } from './react-materialize';

class App extends React.Component {
  render () {
    return (
      <Row className='red lighten-2'>
        <Col s={12}>
          <Navbar>
            <NavItem key='foo'>
              Home
            </NavItem>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default App;

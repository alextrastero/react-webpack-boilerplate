import React from 'react';
import { Card, CardTitle, Col, Row } from './react-materialize';

class App extends React.Component {
  render () {
    return (
      <Row>
        <Col s={4}>
          <Card header={<CardTitle reveal image={'https://placeimg.com/100/100/any'} waves='light' />}
            title='Card Title'
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href='#'>This is a link</a></p>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default App;

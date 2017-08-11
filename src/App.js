import React from 'react';
import { Collapsible, CollapsibleItem } from './react-materialize';

const Foo = ({ children, ...other }) => (
  <CollapsibleItem header='john' {...other}>{children}</CollapsibleItem>
);

class App extends React.Component {
  render () {
    return (
      <Collapsible accordion defaultActiveKey={0}>
        <Foo>john</Foo>
        <Foo>jose</Foo>
      </Collapsible>
    );
  }
}

export default App;

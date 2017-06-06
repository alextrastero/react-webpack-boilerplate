import React from 'react';
import Collapsible from './react-materialize/Collapsible';
import CollapsibleItem from './react-materialize/CollapsibleItem';

const App = () => {
  return (
<Collapsible>
  <CollapsibleItem header='First' icon='filter_drama'>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='Second' icon='place'>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='Third' icon='whatshot'>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
</Collapsible>
  )
};

export default App;

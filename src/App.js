import React from 'react';
import { Input } from './react-materialize';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      label: 'INITIAL LABEL'
    }
  }

  componentDidMount() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
      onSet: this.handleDateChange // returns { select: dateInMilliseconds }
    });
  }

  render () {
    return (
      <div>
        <Input ref='date' type='date' />
      </div>
    );
  }
}

export default App;

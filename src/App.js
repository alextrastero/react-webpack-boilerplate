import React from 'react';
import { Row, Input } from './react-materialize';

const OPTIONS = [{key: 'RD', display: 'Red'}, {key: 'BL', display: 'Blue'}, {key: 'GR', display: 'Green'}, {key: 'YL', display: 'Yellow'}];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { inputVal: '', selectVal: '' };
    this.onChange = this.onChange.bind(this);
    this.renderOption = this.renderOption.bind(this);
  }

  onChange (name, event) {
    this.setState({...this.state, [name]: event.target.value});
  }

  renderOption (option) {
    return <option key={option.key} value={option.key}>{option.display}</option>;
  }

  render () {
    return (
      <div className='App'>
        <Row>
          <Input s={6} type='text' value={this.state.inputVal} onChange={e => this.onChange('inputVal', e)} />

          <Input s={6} type={this.state.inputVal === 'select' ? 'select' : 'text'} onChange={e => this.onChange('selectVal', e)} value={this.state.selectVal} >
            {this.state.inputVal === 'select' ? OPTIONS.map(option => this.renderOption(option)) : null }
          </Input>
        </Row>
      </div>
    );
  }
}

export default App;

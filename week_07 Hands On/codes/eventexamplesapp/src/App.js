// src/App.js
import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello(); // multiple methods on click
  };

  sayHello = () => {
    this.setState({ message: 'Hello! This is a static message.' });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (msg) => {
    alert(`Welcome Message: ${msg}`);
  };

  handleSyntheticEvent = (event) => {
    alert('I was clicked (Synthetic Event)');
    console.log('Synthetic Event:', event);
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>🖱️ React Event Handling Example</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement} style={{ marginLeft: '10px' }}>Decrement</button>
        <p>{this.state.message}</p>

        <hr />

        <button onClick={() => this.sayWelcome("Welcome to React!")}>Say Welcome</button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;

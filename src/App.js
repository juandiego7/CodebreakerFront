import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired 
  };

  render() {
    const { children } = this.props;

    return (
      <div className="App">   
        <header>
          <h1>Juan Diego - CodeBreaker</h1>
        </header>     
          <div className="main">{children}</div>
      </div>
    );
  }
}

export default App;

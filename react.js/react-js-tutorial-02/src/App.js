import React, { Component } from 'react'
import './App.css';

import Conversor from './components/Conversor';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Conversor moedaA="USD" moedaB="BRL" />
      </div>
    )
  }
}
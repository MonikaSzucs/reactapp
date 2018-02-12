import React, { Component } from 'react';
import Login from './comp/Login';
import mySocket from 'socket.io-client';//importing socket packege
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}
export default App;
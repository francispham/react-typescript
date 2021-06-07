import React from 'react';

import { Header } from './components/Header';
import { Button } from './components/Button';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header user={{ name: 'Francis'  }} title='ReactTS' isActive />

      <Button 
        onMouseUp={() => {
          console.log('Mouse Up');
        }}
        onMouseDown={value => {
          console.log(value);
        }}
        onMouseOut={() => {
          console.log('Mouse Out');
        }}
        onMouseOver={value => {
          console.log(value);
        }}
      />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';

import { Header } from './components/Header';
import { Inputs } from './components/Inputs';
import { Button, ButtonFC } from './components/Button';

import logo from './logo.svg';
import './App.css';

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <div className="App">
      <Header user={{ name: 'Francis'  }} title='ReactTS' isActive />
      <Inputs />
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
        onClick={e => {
          e.preventDefault();
          console.log('e:', e);
        }}
      />

      <header className="App-header">
        <ButtonFC
          onClick={e => {
            e.preventDefault();
            setShow(!show);
          }}
        >
          
          {show ? <img src={logo} className="App-logo" alt="logo" /> : 'Child Button'}
        </ButtonFC>
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

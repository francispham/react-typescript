import React from 'react';

import { Header } from './Header';
import { Inputs } from './Inputs';
import GlobalProvider from './GlobalState';
import { ContextButtons } from './ContextButtons';
import { ReducerButtons } from './ReducerButtons';
import { Button, ButtonFC } from './Button';
import ClassComponent from './ClassComponent';
import GuestList from '../stateType/GuestList';
import UserSearch from '../stateType/UserSearch';

import logo from '../logo.svg';
import '../css/App.css';

function App() {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <div className="App">
      <h2>Props, State & Event Handlers Typings</h2>
      <UserSearch />
      <GuestList />
      <GlobalProvider>
        <>
          <Header user={{ name: 'Francis'  }} title='ReactTS' isActive />
          <ClassComponent title='Class Title' />
          <ContextButtons />
          <ReducerButtons />
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
        </>
      </GlobalProvider>
    </div>
  );
}

export default App;

import React from "react";

import { Header } from "./Header";
import { Inputs } from "./Inputs";
import GlobalProvider from "./GlobalState";
import { Button, ButtonFC } from "./Button";
import { ContextButtons } from "./ContextButtons";
import { ReducerButtons } from "./ReducerButtons";
import ClassComponent, { ClassComponentInterface } from "./ClassComponent";

import "../css/App.css";
import { users } from "../constants";
import GuestList from "../stateType/GuestList";
import UserSearch from "../stateType/UserSearch";

import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";

function App() {
  const [showGlobal, setShowGlobal] = React.useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="App-logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="App-logo" alt="React logo" />
          </a>
        </div>

        <UserSearch />
        <GuestList />
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

        <ButtonFC
          onClick={(e) => {
            e.preventDefault();
            setShowGlobal(!showGlobal);
          }}
        >
          {showGlobal ? "Show" : "Hide"} Global Content
        </ButtonFC>
      </header>

      {!showGlobal && (
        <GlobalProvider>
          <>
            <Header user={{ name: "Francis" }} title="ReactTS" isActive />
            <ClassComponent title="Class Title" />
            <ClassComponentInterface users={users} />

            <ContextButtons />
            <ReducerButtons />
            <Inputs />
            <Button
              onMouseUp={() => console.log("Mouse Up")}
              onMouseDown={(value) => console.log(value)}
              onMouseOut={() => console.log("Mouse Out")}
              onMouseOver={(value) => console.log(value)}
              onClick={(event) => {
                event.preventDefault();
                console.log("Event:", event);
              }}
            />
          </>
        </GlobalProvider>
      )}
    </div>
  );
}

export default App;

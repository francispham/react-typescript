import React from "react";

import { Header } from "./Header";
import { Inputs } from "./Inputs";
import GlobalProvider from "./GlobalState";
import { Button, ButtonFC } from "./Button";
import { ContextButtons } from "./ContextButtons";
import { ReducerButtons } from "./ReducerButtons";
import ClassComponent, { ClassComponentInterface } from "./ClassComponent";

import { users } from "../constants";
import GuestList from "../stateType/GuestList";
import UserSearch from "../stateType/UserSearch";

import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";

function App() {
  const [showGlobal, setShowGlobal] = React.useState<boolean>(true);

  return (
    <div className="app">
      {/* Global State */}
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
              onMouseDown={(value) => console.log("onMouseDown", value)}
              onMouseOut={() => console.log("Mouse Out")}
              onMouseOver={(value) => console.log("onMouseOver", value)}
              onClick={(event) => {
                event.preventDefault();
                console.log("onClick Event:", event);
              }}
            />
          </>
        </GlobalProvider>
      )}
      <header className="flex flex-col items-center">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="app-logo" alt="React logo" />
        </a>
      </header>

      <p> Global State {showGlobal ? "Off" : "On"}</p>
      <ButtonFC
        onClick={(e) => {
          e.preventDefault();
          setShowGlobal(!showGlobal);
        }}
      >
        Functional Component Button
      </ButtonFC>

      <UserSearch />
      <GuestList />

      <footer className="flex flex-col items-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="app-logo" alt="Vite logo" />
        </a>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;

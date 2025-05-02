import { ReactNode, useReducer } from "react";
import { initialValues } from "../constants";
import { GlobalContext } from "./GlobalContext";

// https://www.educba.com/typescript-type-vs-interface/
interface State {
  //  Very Similar to type in ReactJS
  globalValue: boolean;
}

type Action = { type: "ON" } | { type: "OFF" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ON":
      return { globalValue: true };
    case "OFF":
      return { globalValue: false };
    default:
      return state;
  }
}

const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <GlobalContext.Provider
      value={{
        globalValue: state.globalValue,
        turnOn: () => dispatch({ type: "ON" }),
        turnOff: () => dispatch({ type: "OFF" }),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

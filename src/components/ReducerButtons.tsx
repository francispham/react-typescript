import { useReducer, useRef, useContext } from "react";

import { useClickOutside } from "../hooks/useClickOutside";
import { GlobalContext } from "./GlobalContext";

const initialState = { rValue: true };

type State = {
  rValue: boolean;
};
/*  Solutions for checking Action VI: 
  type Action = {
    type: 'I' | 'II' | 'III';
  };
  Or:
  type Action = { type: 'I' } | { type: 'II' } | { type: 'III' }; 
  Or:
*/
type Action = { type: "I" } | { type: "II" } | { type: "III" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "I":
      return { rValue: true };
    case "II":
      return { rValue: false };
    case "III":
      return { rValue: true };
    default:
      return state;
  }
}

export const ReducerButtons = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef<HTMLDivElement>(null!);

  const { globalValue } = useContext(GlobalContext);

  useClickOutside(ref, () => {
    console.log("Click From Outside ReducerButtons Component!");
  });

  return (
    <section className="p-3 pl-0" ref={ref}>
      <h2>
        {globalValue
          ? "GlobalValue is true from GlobalState"
          : "No Global Value is false"}
      </h2>
      <h2 className="p-3 pl-0">
        Current State of rValue: {state?.rValue.toString()}
      </h2>
      <button
        className="flex items-center bg-blue-500 px-4 py-3 m-1 rounded-2xl text-white hover:bg-blue-400"
        onClick={() => dispatch({ type: "I" })}
      >
        Action I ReducerButton
      </button>
      <button
        className="flex items-center bg-blue-500 px-4 py-3 m-1 rounded-2xl text-white hover:bg-blue-400"
        onClick={() => dispatch({ type: "II" })}
      >
        Action II ReducerButton
      </button>
      <button
        className="flex items-center bg-blue-500 px-4 py-3 m-1 rounded-2xl text-white hover:bg-blue-400"
        onClick={() => dispatch({ type: "III" })}
      >
        Action III ReducerButton
      </button>
      {/* Action IV should be invalid:
        <button onClick={() => dispatch({ type: 'IV'})}>Action III</button> 
      */}
    </section>
  );
};

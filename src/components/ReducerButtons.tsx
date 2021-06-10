import React, { useReducer, useRef, useContext } from 'react'

import { GlobalContext } from './GlobalState';
import { useClickOutside } from '../hooks/useClickOutside';

const initialState = { rValue: true }

type State = {
  rValue: boolean
};
/*  Solutions for checking Action VI: 
  type Action = {
    type: 'I' | 'II' | 'III';
  };
  Or:
  type Action = { type: 'I' } | { type: 'II' } | { type: 'III' }; 
  Or:
*/
type Action = | { type: 'I' } 
              | { type: 'II' } 
              | { type: 'III' }; 


function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'I':
      return { rValue: true };
    case 'II':
      return { rValue: false };
    case 'III':
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
    console.log('Click From Outside ReducerButtons Component!')
  });

  return (
    <div ref={ref}>
      <h2>{globalValue ? 'GlobalValue is true from GlobalState' : 'No Global Value is false'}</h2>
      <h2>Current State of rValue: {state?.rValue.toString()}</h2>
      <button onClick={() => dispatch({ type: 'I'})}>Action I</button>
      <button onClick={() => dispatch({ type: 'II'})}>Action II</button>
      <button onClick={() => dispatch({ type: 'III'})}>Action III</button> 
      {/* Action IV should be invalid:
        <button onClick={() => dispatch({ type: 'IV'})}>Action III</button> 
      */}
    </div>
  )
}

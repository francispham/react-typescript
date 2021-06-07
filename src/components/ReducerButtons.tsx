import React, { useReducer } from 'react'

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
  return (
    <div>
      <h2>{state?.rValue.toString()}</h2>
      <button onClick={() => dispatch({ type: 'I'})}>Action I</button>
      <button onClick={() => dispatch({ type: 'II'})}>Action II</button>
      <button onClick={() => dispatch({ type: 'III'})}>Action III</button> 
      {/* Action IV should be invalid:
        <button onClick={() => dispatch({ type: 'IV'})}>Action III</button> 
      */}
    </div>
  )
}

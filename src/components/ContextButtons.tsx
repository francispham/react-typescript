import { useContext } from 'react'

import { GlobalContext } from './GlobalState';

export const ContextButtons = () => {
  const context = useContext(GlobalContext);
  const { globalValue, turnOn, turnOff } = context;

  return (
    <div>
      <h2>Current State of globalValue: {globalValue?.toString()}</h2>
      <button onClick={turnOn}>ON Button</button>
      <button onClick={turnOff}>OFF Button</button>
    </div>
  )
}

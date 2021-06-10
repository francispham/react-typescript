import { globalEval } from 'cypress/types/jquery';
import { createContext, useReducer } from 'react';

export const initialValues = {
  globalValue: true,
  turnOn: () => {},
  turnOff: () => {}
};

export const GlobalContext = createContext(initialValues);

type State = {
  globalValue: boolean
};

type Action = { type: 'ON' } | { type: 'OFF' } 


function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'ON':
      return { globalValue: true };
    case 'OFF':
      return { globalValue: false };
    default:
      return state;
  }
}

const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);


  return (
    <GlobalContext.Provider 
      value={{
        globalValue: state.globalValue,
        turnOn: () => dispatch({ type: 'ON'}),
        turnOff: () => dispatch({ type: 'OFF'})
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
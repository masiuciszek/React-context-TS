import * as React from 'react';

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'RESET' };
type Dispatch = (action: Action) => void;
type State = { count: number };
interface Props {
  children: React.ReactNode;
}

const initialState: State = {
  count: 0,
};

const CountStateContext = React.createContext<State | undefined>(undefined);
const CountDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'RESET':
      return {
        ...state,
        count: state.count = 0,
      };
    default: {
      throw new Error(`Unable action type `);
    }
  }
}

function CountProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(countReducer, initialState);

  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
}

const useCountState = (): State | undefined => {
  const context = React.useContext(CountStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};

const useCountDispatch = (): Dispatch => {
  const context = React.useContext(CountDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
};

export { CountProvider, useCountState, useCountDispatch };

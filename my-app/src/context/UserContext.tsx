import * as React from 'react';

interface User {
  id: number;
  name: string;
}

interface GetUsers {
  type: 'GET_USERS';
  payload: User[];
}
interface UsersError {
  type: 'USERS_ERROR';
  payload: string;
}
interface ClearError {
  type: 'CLEAR_ERROR';
}

type Action = GetUsers | UsersError | ClearError;

type Dispatch = (action: Action) => void;

interface State {
  users: User[];
  error: string;
}

interface Props {
  children: React.ReactNode;
}

const initialState: State = {
  users: [],
  error: '',
};

const UsersStateContext = React.createContext<State | undefined>(undefined);
const UserDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

function userReducer(state: State, action: Action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
      };
    default:
      throw new Error(`Unable action type `);
  }
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};

const useUsersState = () => {
  const context = React.useContext(UsersStateContext);
  if (context === undefined) {
    throw new Error('Userstate must been used in UserProvider');
  }
  return context;
};

const useUsersDispatch = () => {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('UserDispatch must been used in UserProvider');
  }
  return context;
};

const getUsers = async (
  dispatch: Dispatch,
  users: User[],
  errorMSg: string,
) => {
  try {
    dispatch({ type: 'GET_USERS', payload: users });
  } catch (err) {
    dispatch({ type: 'USERS_ERROR', payload: errorMSg });
  }
};

export { UserProvider, useUsersState, useUsersDispatch, getUsers };

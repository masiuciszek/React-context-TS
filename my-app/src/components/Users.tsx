import * as React from 'react';
import {
  useUsersState,
  useUsersDispatch,
  getUsers,
} from '../context/UserContext';

interface Props {}

const Users: React.FC<Props> = () => {
  const [usersData, setUsersData] = React.useState([]);
  const [error, setError] = React.useState('');
  const userState = useUsersState();
  const dispatch = useUsersDispatch();

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsersData(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {' '}
      <h1> {userState.users.length > 0 && 'Users'} </h1>{' '}
      <button
        onClick={() => {
          getUsers(dispatch, usersData, error);
        }}>
        Get users
      </button>
      {userState.users.length > 0 &&
        userState.users.map((user) => <h3 key={user.id}>{user.name}</h3>)}
    </div>
  );
};
export default Users;

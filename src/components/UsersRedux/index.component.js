import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserList, removeUser } from '../../store/actions';

export default function UsersRedux() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);
  const removeUserFromList = (id) => {
    dispatch(removeUser(id));
  };

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <div>
      <h3>Users List</h3>
      {usersList.map((user) => (
        <div key={user.id}>
          {user.name}{' '}
          <button onClick={removeUserFromList.bind(null, user.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

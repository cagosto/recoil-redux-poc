import React, { useEffect } from 'react';
import { usersList } from '../../atoms/usersList.atom';
import User from '../User/index.component';
const { useRecoilValueLoadable, useRecoilState } = require('recoil');
const { users } = require('../../selectors/users.selector');

export default function Users() {
  const userNameLoadable = useRecoilValueLoadable(users);
  const [userList, setUserList] = useRecoilState(usersList);

  const removeUser = (id) => {
    setUserList((prev) => prev.filter((u) => u.id !== id));
  };

  useEffect(() => {
    if (userNameLoadable.state === 'hasValue') {
      setUserList(userNameLoadable.contents);
    }
  }, [setUserList, userNameLoadable]);

  switch (userNameLoadable.state) {
    case 'hasValue':
      return (
        <div>
          <h3>Users List</h3>
          {userList.map((user) => (
            <User key={user.id} data={user} removeUser={removeUser} />
          ))}
        </div>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw userNameLoadable.contents;
    default:
      return null;
  }
}

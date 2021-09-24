import React from 'react';
import User from '../User/index.compoent';
const { useRecoilValueLoadable } = require('recoil');
const { users } = require('../../selectors/users.selector');

export default function Users() {
  const userNameLoadable = useRecoilValueLoadable(users);
  switch (userNameLoadable.state) {
    case 'hasValue':
      return (
        <div>
          {userNameLoadable.contents.map((user) => (
            <User data={user} />
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

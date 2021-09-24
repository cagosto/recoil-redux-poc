import React from 'react';
import AddUserRedux from '../AddUserRedux/index.component';
import UsersRedux from '../UsersRedux/index.component';

export default function ReduxHolder() {
  return (
    <div>
      <h2>Redux State</h2>
      <hr />
      <AddUserRedux />
      <UsersRedux />
    </div>
  );
}

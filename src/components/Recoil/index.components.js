import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import AddUser from '../AddUser/index.component';
import Users from '../Users/Users.component';

export default function RecoilHolder() {
  return (
    <div>
      <h2>Recoil State</h2>
      <hr />
      <AddUser />
      <ErrorBoundary FallbackComponent={ErrorBoundary}>
        <Users />
      </ErrorBoundary>
    </div>
  );
}

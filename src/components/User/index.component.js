import React from 'react';

export default function User({ data: { name, id }, removeUser }) {
  return (
    <div>
      {name}{' '}
      <button
        onClick={() => {
          removeUser(id);
        }}
      >
        Remove
      </button>
    </div>
  );
}

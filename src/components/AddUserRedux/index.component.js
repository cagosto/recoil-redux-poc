import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { postNewUser } from '../../store/actions';

export default function AddUserRedux() {
  const dispatch = useDispatch();
  const fullName = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(true);
    dispatch(postNewUser({ name: fullName.current.value }));
  };

  return (
    <div>
      <h3>Add User</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" ref={fullName} />
      </form>
      <hr />
    </div>
  );
}

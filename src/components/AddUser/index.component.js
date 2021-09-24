import axios from 'axios';
import React, { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { usersList } from '../../atoms/usersList.atom';

export default function AddUser() {
  const fullName = useRef();
  const setUsersList = useSetRecoilState(usersList);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        name: fullName.current.value,
      })
      .then((res) => {
        setUsersList((prev) => [...prev, res.data]);
      });
  };

  return (
    <>
      <h3>Add User</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required ref={fullName} />
      </form>
      <hr />
    </>
  );
}

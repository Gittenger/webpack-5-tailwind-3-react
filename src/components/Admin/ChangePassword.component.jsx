import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CIndex from '../components.index.js';
import auth from '../../utils/auth.js';

const { checkAuthToken } = auth;

const ChangePassword = () => {
  const {
    TComp: { P },
  } = CIndex;
  const [values, setValues] = useState({
    password: '',
    passwordConfirm: '',
    currentPassword: '',
    error: '',
    successMsg: '',
  });
  const { password, passwordConfirm, currentPassword, error, successMsg } =
    values;

  const { token } = checkAuthToken();

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch(`${process.env.API}/users/updatePassword`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ password, passwordConfirm, currentPassword }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          setValues({ ...values, error: res.message });
        } else {
          setValues({
            ...values,
            error: '',
            successMsg: 'Password succesfully updated',
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <P>Change current password:</P>
      <form>
        <div>
          <label for="currentPassword">Current password:</label>
          <input
            type="password"
            name="currentPassword"
            value={currentPassword}
            onChange={handleChange('currentPassword')}
          />
        </div>
        <div>
          <label for="password">New password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange('password')}
          />
        </div>
        <div>
          <label for="passwordConfirm">Confirm new password:</label>
          <input
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handleChange('passwordConfirm')}
          />
        </div>
      </form>
      <button onClick={handleSubmit}>Update password</button>
      {error && <p style={{ color: 'red' }}> {error}</p>}
      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
      <Link to="/admin">⇽ Back to admin</Link>
    </div>
  );
};

export default ChangePassword;

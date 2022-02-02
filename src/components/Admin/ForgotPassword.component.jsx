import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: '',
    error: '',
    successMsg: '',
  });

  const { email, error, successMsg } = values;

  const handleChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.API}/users/forgotPassword`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          setValues({ ...values, error: res.message });
        } else {
          setValues({
            email: '',
            error: '',
            successMsg: 'Reset link sent to email',
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <p>
        Submit your email now to send a link to yourself for resetting your
        password
      </p>
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}> {error}</p>}
      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
      <Link to="/admin">⇽ Back to admin</Link>
    </div>
  );
};

export default ForgotPassword;

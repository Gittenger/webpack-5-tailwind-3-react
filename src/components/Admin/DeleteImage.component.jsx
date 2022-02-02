import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import auth from '../../utils/auth.js';

const { checkAuthToken } = auth;

const DeleteImage = () => {
  const { token } = checkAuthToken();
  const [images, setImages] = useState([]);

  const getImages = useCallback(() => {
    fetch(`${process.env.API}/images`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ images }) => {
        setImages(
          images.map(({ name, _id }) => ({
            name,
            src: `${process.env.PUBLIC}/img/${name}`,
            id: _id,
          }))
        );
      })
      .catch((err) => console.error(err));
  });

  useEffect(getImages, []);

  const handleDelete = (e) => {
    const { id, name } = e.target;
    const data = {
      filename: name,
      id,
    };

    fetch(`${process.env.API}/images/delete`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        getImages();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Delete Images:</h2>
      <Link to="/admin">⇽ Back to admin</Link>
      <div>
        {images.map(({ name, src, id }) => (
          <div key={id}>
            <img src={src} alt="" />
            <button onClick={handleDelete} name={name} id={id}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <Link to="/admin">⇽ Back to admin</Link>
    </div>
  );
};
export default DeleteImage;

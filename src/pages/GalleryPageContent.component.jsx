import React, { useState, useEffect, useCallback } from 'react'

import LocalImages from '../assets/img/img-index.js'
import CIndex from '../components/components.index.js'

const Gallery = () => {
  const [images, setImages] = useState([])
  const { StyledCarousel } = CIndex

  const {
    img: { ImgOne, ImgTwo, ImgTnree },
  } = LocalImages

  useEffect(() => {
    // Using Api...
    // fetch(`${process.env.API}/images`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then(({ images }) => {
    //     setImages(
    //       images.map((img) => ({
    //         src: `${process.env.PUBLIC}/img/${img.name}`,
    //       }))
    //     )
    //   })
    //   .catch((err) => console.error(err))
    // Using Local files for demo
    setImages(
      [ImgOne, ImgTwo, ImgTnree].map((img) => ({
        src: img,
      }))
    )
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="flex flex-col items-center justify-start pb-10">
      <StyledCarousel images={images} />
    </main>
  )
}

export default Gallery

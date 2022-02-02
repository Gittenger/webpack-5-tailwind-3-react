import React, { useState, useEffect, useCallback } from 'react';
import 'react-gallery-carousel/dist/index.css';
import Carousel from 'react-gallery-carousel';

import LocalImages from '../assets/img/img-index.js';

const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [navMobileActive, setNavMobileActive] = useState(false);

  // BREAKPOINT
  const mobileBreakpoint = '768px';

  // WINDOW WIDTH EVENT LISTENER
  const checkNavMobileActive = useCallback(() => {
    if (window.innerWidth <= mobileBreakpoint) {
      setNavMobileActive(true);
    } else setNavMobileActive(false);
  }, [mobileBreakpoint]);

  // ON COMPONENT RENDER
  useEffect(() => {
    checkNavMobileActive();
    if (window.screen.width <= mobileBreakpoint) {
      setNavMobileActive(true);
    }
    window.addEventListener('resize', checkNavMobileActive);
    return () => {
      window.removeEventListener('resize', checkNavMobileActive);
    };
  }, [navMobileActive, checkNavMobileActive, mobileBreakpoint]);

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
      LocalImages.map((img) => ({
        src: img,
      }))
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Carousel
        images={images}
        isAutoPlaying={true}
        hasIndexBoard={false}
        hasThumbnailsAtMax={false}
        hasThumbnails={navMobileActive ? false : true}
        hasRightButton={navMobileActive ? 'bottomRight' : 'centerRight'}
        hasLeftButton={navMobileActive ? 'bottomLeft' : 'centerLeft'}
      />
    </div>
  );
};

export default Portfolio;

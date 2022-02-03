import React from 'react'
import 'react-gallery-carousel/dist/index.css'
import Carousel from 'react-gallery-carousel'

import styles from './styles/StyledCarousel.module.css'

const StyledCarousel = ({ images }) => {
  return (
    <div className={`${styles.carousel}`}>
      <Carousel
        images={images}
        isAutoPlaying={true}
        hasIndexBoard={false}
        hasThumbnailsAtMax={false}
        hasThumbnails={true}
      />
    </div>
  )
}

export default StyledCarousel

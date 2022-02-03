import HomePageContent from './HomePageContent.component.jsx'
import GalleryPageContent from './GalleryPageContent.component.jsx'

import getPage from '../utils/getPage.js'

const pages = {
  HomePage: getPage('Home', HomePageContent),
  GalleryPage: getPage('Gallery', GalleryPageContent),
}

export const { HomePage, GalleryPage } = pages

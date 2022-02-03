import React from 'react'

import CIndex from '../components/components.index'

const { Page } = CIndex

export const getPage = (title, component) => () =>
  <Page title={title} Component={component} />

export default getPage

import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'

const HomePageContent = () => {
  const { Button, Footer } = CIndex
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="flex flex-col items-center justify-start pb-10">
      <div className="flex justify-center items-center space-x-4">
        <Button />
        <Button color="blue" />
        <Button color="green" />
      </div>
    </main>
  )
}

export default HomePageContent

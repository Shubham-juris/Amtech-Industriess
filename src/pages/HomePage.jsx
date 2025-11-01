import React from 'react'
import Home from '../components/homecomponents/Home'
import FeaturedCategories from '../components/homecomponents/FeaturedCategories'
import TrendingProductsBanner from '../components/homecomponents/TrendingProductsBanner'
import Sporty from '../components/homecomponents/Sporty'

const HomePage = () => {
  return (
    <>
      <Home/>
      <FeaturedCategories/>
      <TrendingProductsBanner/>
      <Sporty/>
    </>
  )
}

export default HomePage

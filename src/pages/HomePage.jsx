import React from 'react'
import Home from '../components/homecomponents/Home'
import FeaturedCategories from '../components/homecomponents/FeaturedCategories'
import TrendingProductsBanner from '../components/homecomponents/TrendingProductsBanner'

const HomePage = () => {
  return (
    <>
      <Home/>
      <FeaturedCategories/>
      <TrendingProductsBanner/>
    </>
  )
}

export default HomePage

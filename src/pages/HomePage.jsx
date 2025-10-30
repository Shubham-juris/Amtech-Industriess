import React from 'react'
import Home from '../components/homecomponents/Home'
import FeaturedCategories from '../components/homecomponents/FeaturedCategories'
// import { PopularProducts } from '../components/homecomponents/PopularProducts'
import TrendingProductsBanner from '../components/homecomponents/TrendingProductsBanner'

const HomePage = () => {
  return (
    <>
      <Home/>
      <FeaturedCategories/>
      {/* <PopularProducts/> */}
      <TrendingProductsBanner/>
    </>
  )
}

export default HomePage

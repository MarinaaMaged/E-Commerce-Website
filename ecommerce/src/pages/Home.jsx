import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/latestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
const Home=()=>{
  return(
    <div>
        <Hero></Hero>
        <LatestCollection/>
        <BestSeller />
        <Policy />

    </div>
  )
}

export default Home
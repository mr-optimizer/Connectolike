import React from 'react'
import Hero from './pages/Landing/Hero';
import Features from './pages/Landing/Features';
import Whycc from './pages/Landing/Whycc';

const Landing = () => {
  return (
    <div className='landing'>
      <Hero/>
      <h1 className='section__head'>Why Code Companion</h1>
      <Whycc/>
      <h1 className="section__head">Features</h1>
      <Features/>
    </div>
  )
}

export default Landing;
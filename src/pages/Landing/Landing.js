import React from 'react'
import Hero from './Hero';
import Features from './Features';
import WhyCodeCompanion from './WhyCodeCompanion';
import './Landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <Hero/>
      <WhyCodeCompanion/>
      <Features/>
    </div>
  )
}

export default Landing;
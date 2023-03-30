import React from 'react'
// import Header from '../../components/Header/Header';
import Hero from './Hero';
import Features from './Features';
import Whycc from './Whycc';
// import Footer from '../../components/Header/Footer';

const Landing = () => {
  return (
    <div className='landing'>
      {/* <Header/> */}
      <Hero/>
      <h1 className='section__head'>Why Code Companion</h1>
      <Whycc/>
      <h1 className="section__head">Features</h1>
      <Features/>
      {/* <Footer/> */}
    </div>
  )
}

export default Landing;
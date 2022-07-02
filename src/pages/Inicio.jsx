import React, { Fragment } from 'react'
import Header from '../components/header/Header';
import HeroSlider from '../components/hero-slider/HeroSlider';
import PopularMenu from '../components/popular-menu/PopularMenu';


const Inicio = () => {
  return (
    <Fragment>        
        <Header/>
        <HeroSlider/>
        <PopularMenu/>
    </Fragment>
  )
}

export default Inicio
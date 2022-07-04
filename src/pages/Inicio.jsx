import React, { Fragment } from 'react'
import ChooseUs from '../components/choose-us/ChooseUs';
import Descarga from '../components/download-section/Descarga';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeroSlider from '../components/hero-slider/HeroSlider';
import MenuPack from '../components/menu-pack/MenuPack';
import PopularMenu from '../components/popular-menu/PopularMenu';
import Testimonials from '../components/testimonials/Testimonials';


const Inicio = () => {
  return (
    <Fragment>        
        <Header/>
        <HeroSlider/>
        <PopularMenu/>
        <ChooseUs/>
        <MenuPack/>
        <Testimonials/>
        <Descarga/>
        <Footer/>
    </Fragment>
  )
}

export default Inicio
import React, { Fragment } from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import MenuPack from '../components/menu-pack/MenuPack';
import PopularMenu from '../components/popular-menu/PopularMenu';


const Menu = () => {
    return (
        <Fragment>
            <Header />
            <hr /><hr />
            <MenuPack />
            <PopularMenu />
            <Footer />
        </Fragment>
    )
}

export default Menu
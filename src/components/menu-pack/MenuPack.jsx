import React, {useState, useEffect} from 'react'

import {Container, Row, Col} from 'reactstrap'

import ProductCard from '../product-card/ProductCard'
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from '../../assets/fake-data/products'
import './menu-pack.css'

const MenuPack = () => {

const [filter, setFilter] = useState('RICE-MENU')
const [products, setProducts] = useState(riceMenuProducts)

useEffect(()=>{

    if(filter == 'ARROZ'){
        setProducts(riceMenuProducts)
    }
    if(filter == 'SNACKS'){
        setProducts(fastFoodProducts)
    }
    if(filter == 'PIZZA'){
        setProducts(pizzaProducts)
    }
    if(filter == 'POSTRES'){
        setProducts(dessertProducts)
    }
    if(filter == 'CAFE'){
        setProducts(coffeeProducts)
    }
},[filter])

  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-4'>
                    <h3 className='menu__title'>Nuestro Menu</h3>
                </Col>
                <Col lg='12' className='text-center mb-5'>
                <button className={`filter-btn ${filter == 'SNACKS' ? 'active__btn' : ''}`} onClick={()=> setFilter('SNACKS')}>Snacks</button>
                <button className={`filter-btn ${filter == 'ARROZ' ? 'active__btn' : ''}`} onClick={()=> setFilter('ARROZ')}>Arroz</button>
                <button className={`filter-btn ${filter == 'PIZZA' ? 'active__btn' : ''}`} onClick={()=> setFilter('PIZZA')}>Pizzas</button>
                <button className={`filter-btn ${filter == 'POSTRES' ? 'active__btn' : ''}`} onClick={()=> setFilter('POSTRES')}>Postres</button>
                <button className={`filter-btn ${filter == 'CAFE' ? 'active__btn' : ''}`} onClick={()=> setFilter('CAFE')}>Cafe</button>
                </Col>      
                {
                    products.map(item=>(
                        <Col lg='3' key={item.id} className="mb-4">
                            {" "}
                            <ProductCard item={item}/>
                            </Col>
                        
                    ))
                }          
            </Row>
        </Container>
    </section>
  )
}

export default MenuPack
import React from 'react'
import ProductUpperPart from './ProductUpperPart'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

const ProductHomePage = () => {
  return (
    <div>
      <div className='4xsm:h-[3rem] 3xsm:h-[3rem] 2xsm:h-[3rem] xsm:h-[10rem] md:h-[12rem] lg:h-[15rem] w-auto xlg:h-[17rem] 2xlg:h-[22rem]'>
          <NavBar/>
      </div>
      <ProductUpperPart/>
      <Footer/>
    </div>
  )
}

export default ProductHomePage
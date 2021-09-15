import React from 'react'
import styled from 'styled-components'
import {  CheckoutForm } from '../components'
// import CartTotals from '../components/CartTotals'
import Ckout from '../components/Ckout'


const CheckoutPage = () => {
 

  return (
    <main>
   
      <Wrapper className='page'>
        <CheckoutForm/>
      </Wrapper>
          {/* <CartTotals /> */}
        <hr/>  
        <Ckout/>
    </main>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`
export default CheckoutPage

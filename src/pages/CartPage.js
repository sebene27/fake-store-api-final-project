import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent } from '../components'
const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
     
      <Wrapper className='page'>
        <CartContent/>
      </Wrapper>
      <Link style={{background:"#2d08b3",
    fontSize: "1.3rem",marginBottom:"5rem",
    color: "#fff",
    letterSpacing:"1.05rem",
    marginLeft:"50%"}}to='/checkout' className='btn'>
            Checkout
          </Link>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
 
`

export default CartPage

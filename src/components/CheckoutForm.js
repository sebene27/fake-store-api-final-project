import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
const CheckoutForm = () => {
  const { cart } = useCartContext()

  return (
    <Wrapper className='section section-center'>
   
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          More To Shop?
        </Link>
        <CartTotals/>
             </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    /* margin-top: 2rem; */
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: lightblue;
    color: white;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: #fa5555;
    letter-spacing:1.05rem;
    font-size:1.2rem;
  }
`
export default CheckoutForm

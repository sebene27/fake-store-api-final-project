import React from 'react'
import styled from 'styled-components'
import logo from '../assets/fake-store-api-logo.png'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'


const Nav = () => {


  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='fake store' />
          </Link>
         
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 3rem;
     list-style: none;
  display: flex;
  margin-bottom:5rem;
  align-items: center;
  justify-content: center;
  /* margin-top:1.2rem; */
  background: #aa059c;
 overflow: hidden;
  position: fixed;
  z-index: 100;
  width:100%;
  top: 0;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
      
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
 
    img {
      width: 60px;
      /* margin-top:1.2rem; */
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
   
      }
      a {
        color: yellow;
        font-size: 1.5rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
       text-decoration:none;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
  ul{
list-style:none;
  }
`

export default Nav

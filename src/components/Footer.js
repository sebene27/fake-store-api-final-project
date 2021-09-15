import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Shume's Fake-Store API for  Fianal Proj @BW</span>
      </h5>
      <h5>All rights reserved</h5>
    </Container>
  )
}

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 600;
    text-transform: none;
    line-height: 1.5;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer

import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, title, price } = product
        return (
          <article key={id}>
            <img src={image} alt={title} />
            <div>
              <h4>{title}</h4>
              <h5 className='price'>${price}</h5>
            
              <Link to={`/products/${id}`} className='btn'>
                Details
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {

    display: block;
    width: 170px;
    height: auto;
    object-fit: cover;
     margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
    
  }
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    background: lightblue;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView

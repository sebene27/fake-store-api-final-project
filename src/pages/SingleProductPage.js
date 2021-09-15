import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'

import {
  Loading,
  Error,
  AddToCart,

} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const SingleProductPage = () => {
  const { id } = useParams()

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    // eslint-disable-next-line
  }, [id])
 
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  const {
    title,
    price,
    description,
    image,
  } = product
  return (
    <Wrapper>
   
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          <img src={image} alt=''/>
      
          <section className='content'>
            <h2>{title}</h2>
   
            <h5 className='price'>{price}</h5>
            <p className='desc'>{description}</p>
           
            { <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  img{
    width:auto;
    height:400px ;
  }
  .price {
    color: #6d07cc;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import st from '../assets/favicon.ico'
import styled from 'styled-components';

const Hero = () => {

  return (
   <Carowrapper>
    <Carousel className="carousel" interval={2500}marginTop={1000}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={st}
      alt="First slide"
    height= "650"
    marginTop="20"
 />
    <Carousel.Caption>
      <h3 style={{color:"yellow", fontSize:"40px"}}>FAKE STORE API</h3>
      <p style={{color:"yellow", fontSize:"30px"}}>Shumetie's Fake Store App</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
      alt="First slide"
    height= "650"
    marginTop="20"
 />
    <Carousel.Caption>
      <h3 style={{fontSize:"40px"}}>Women's Clothing</h3>
      <p>Opna Women's Short Sleeve Moisture.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
      alt="Second slide"
   height= "650"   marginTop="20"
  />

    <Carousel.Caption>
      <h3 style={{fontSize:"40px"}}>Men's Clothing</h3>
      <p>Mens Cotton Jacket.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
      alt="Third slide"
   height= "650"   marginTop="20"
  />

    <Carousel.Caption>
      <h3 style={{color:"blue", fontSize:"40px"}}>Electronics</h3>
      <p>Acer SB220Q Bi 21.5 Inches Full HD (1920 X 1080) IPS Ultra-Thin.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
      alt="Third slide"
   height= "650"   marginTop="20"
  />

    <Carousel.Caption>
      <h3 style={{color:"red",fontSize:"40px"}}>Jewelery</h3>
      <p>John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracele.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Carowrapper>
  );
}

 const Carowrapper = styled.div`
.carousel{
    width:1000px;
  height:400px;
 margin-left:200px;
 margin-top:40px;
}
.carousel-indicators {
  display: none;
}
`
export default Hero

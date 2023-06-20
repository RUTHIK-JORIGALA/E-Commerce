import React from 'react'
import styled from 'styled-components'
import { useProductContext } from '../context/ProductContext'
import Product from './Product';

const FeatureProducts = () => {
  const {isLoading , featuredProducts} = useProductContext();
    // console.log(featuredProducts)
  if(isLoading){
    return <h3>Loading......</h3>
  }
  return (
    <Wrapper>
      <div className="container">
      <div className="intro-data">Check Out</div>
      <div className="common-heading">Our Featured Services</div>
        <div className="grid grid-three-columns">
            {
                featuredProducts.map((currElem)=>{
                    return <Product key={currElem.id} {...currElem}/>

                })
            }
        </div>
      </div>
    </Wrapper>
  )
}
  const Wrapper  = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
}

.card-data {
    background-color: #fff;
    border-radius: 1rem;
    .card-data-flex {
        // padding: 0 2rem;
        margin : 1rem ;
        display:flex;
        justify-content:space-between;
    }
    
}

  `
export default FeatureProducts

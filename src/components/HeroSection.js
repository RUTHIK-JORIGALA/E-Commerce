import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'


const HeroSection = ({Data}) => {
    const {name} = Data;
    
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-columns">
            <div className="hero-section-data">
                <p className="intro-data">welcome to</p>
                <h1>Vicky {name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde odit tempore repellendus numquam aperiam quod aspernatur hic ratione in, delectus recusandae commodi, enim maxime, obcaecati porro. </p>
                <NavLink><button className='btn'>shop Now</button></NavLink>
            </div>
            <div className="hero-section-img">
                <figure>
                    <img src='Images\hero.jpg' alt='hero-section' className='img-style'/>
                </figure>
            </div>
        </div>
      </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding:12rem 0;
    img{
        min-width: 10rem;
    }
    .hero-section-data{
        p{
            margin: 2rem 0;
            font-size:1.2rem;
        }
        h1{
            font-size:2rem;
            text-transform: uppercase;
            font-weight: bold;
        }
        .intro-data{
            margin-bottom: 0;
        }
    }
    .hero-section-img{
        width: 80%
    }
    .img-style {
        width: 100%;
        height: auto;
        border-radius:0.8rem;
    }
@media(max-width:${({theme})=>theme.media.small_mobile}){
    .grid-two-columns{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
}
`;

export default HeroSection

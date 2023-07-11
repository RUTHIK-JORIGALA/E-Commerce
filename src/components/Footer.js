import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {FaDiscord , FaYoutube , FaInstagram} from 'react-icons/fa'
function Footer() {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-columns">
            <div>
                <h3>Ready to get Started?</h3>
                <h3>Talk to us today</h3>
            </div>
            <div>
              <button className='btn'><NavLink to='/contact'>Get Started</NavLink></button>   
            </div>
            

        </div>
      </section>

      <footer>
        <div className="container grid grid-four-columns">
          <div className="footer-about">
            <h3>Vicky Store</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi a quisquam sit rem quam, consequuntur neque quo incidunt est?</p>
          </div>
          <div className="footer-subscribe">
            <h3>subscribe to get important updates</h3>
            <form action='#'>
              <input type='email' name='email' placeholder='YOUR E-MAIL'/>
              <input type='submit' value='SUBSCRIBE'/>
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className='icons'/>
              </div>
              <div>
                <FaInstagram className='icons'/>
              </div>
              <div>
                <FaYoutube className='icons'/>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 9876543210</h3>
          </div>
        </div>
        <div className="footer-bottom-section">
          <hr/>
          <div className='container grid grid-two-columns'>
            <p>@{new Date().getFullYear() } Vicky Store. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS AND CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .contact-short{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({theme})=>theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    
    .grid div:last-child{
      justify-self: end;
      align-self: center;
      
    }
    a{
      color:#fff;
      }
  }

  footer{
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};  
    h3{
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom-section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media(max-width:${({theme})=>theme.media.small_mobile}){
    
    .contact-short{
      padding: 5px 10px;
      max-width: 80vw;
      h3{
        font-size: 1.6rem;
      }
      .btn{
        width: 10rem;
        font-size: 1.2rem;
        }
      }
    footer{
      font-size: 1.3rem;
      .container{
        margin: 0;
        h3{
          font-size: 2.6rem;  
          margin-bottom: 0.2rem;
          margin-top: 1.2rem;
        }
      }
      .grid{
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        }
      }
    
    
  }
`

export default Footer

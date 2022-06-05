import React from 'react';
import styled from 'styled-components';  
import {RiGroupLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Section id="home">
        <div className="text">
          <h1>
            <span className="highlight">Guarantee</span> your financial stability  <br/>
          </h1>
          <p>Where you earn money, <span className="highlight">CRYPTO</span> and
            <span className="highlight"> NFT's </span>
             by trading land,finding treasures and building businessess.Welcome!.
            </p>
            <Link to='/profile' className='link'>
            <RiGroupLine/> Join our App
          </Link>
        </div>
       <div className="image">
         <img src="https://media.gq-magazine.co.uk/photos/5e25d00550c26e0008a9b030/master/pass/20200120-invest.jpg" alt="Home Image" />
       </div>
    </Section>
  )
}
const Section = styled.section`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 78vh;
  align-items: center;
  background-color:var(--background-color) ;
  .text {
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* gap: 0rem; */
    .highlight {
      color: var(--primary-color);
    }
    h1 {
      font-size: 4.5vw;
      font-weight:bold ;
      color:#fff;
      margin:0 !important;
    }
    p {
      font-size: 1.5vw;
      color:#fff ;

    }
  }
  .image {
    img {
      width: 85%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
    text-align: center;
    margin: 0 1rem;
    .image {
      img {
        width: 100%;
      }
    }
    .text {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 8vw;
      }
      p {
        font-size: 5vw;
      }
    }
  }
`;
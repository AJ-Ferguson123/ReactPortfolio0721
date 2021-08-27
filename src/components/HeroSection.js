import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PText from './PText'


const HeroStyles = styled.div`
  .hero {
    background-color: #262626;
    color: #A6A6A6;
    height: 100vh;
    min-height: 666px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -20rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 5rem;
      color: #BCB4B4;
    }
  }
  .hero__img {
    width: 98%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid #BCB4B4;
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 100%;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
          list-style: none;
          margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      background-size: cover;
      height: 300px;
      width: 100%;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
    return (
      <HeroStyles>
        <div className="hero">
          <div className="container">
            <h1 className="hero__heading">
              <span className="hero__name">Aaron Ferguson</span>
              <span>Software Developer</span>
            </h1>
              <PText>
                I am web designer and developer for 3
                years. I love to design and make new web experiences for
                people.
             </PText>
            <div className="hero__info">
              <Button btnText="see my works" btnLink="/projects" />
            </div>
            <div className="hero__social">
              <div className="hero__social__indicator">
                <p>Follow &nbsp;</p>
              </div>
              <div className="hero__social__text">
                <ul>
                  <li>
                    <a
                      href="https://github.com/AJ-Ferguson123"
                      target="_blank"
                      rel="noreferrer"
                      >
                      GH
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://instagram.com/runawayrover02"
                      target="_blank"
                      rel="noreferrer"
                      >
                      IG
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/aaron-j-ferguson/"
                      target="_blank"
                      rel="noreferrer"
                      >
                      LI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </HeroStyles>
    );
  }
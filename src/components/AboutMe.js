import React from 'react'
import styled from 'styled-components';
import PText from '../components/PText';
import floor from '../assets/images/floor.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import { GiSonicBoom } from 'react-icons/gi'


const AboutPageStyles = styled.div`
  padding: 2rem 0 10rem 0;
  background-color: #D8D8D8;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    background: #1E1E1E;
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    color: teal;
    font-size: 2.2rem;
    margin-bottom: 2rem;
    margin-left: 4vw;
    span {
      background-color: #1E1E1E;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-top: 8vh;
    margin-left: 2vw;
    margin-bottom: 4rem;
    color: #606060;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      width: 70%;
      border: 2px solid #BCB4B4;
    }
  }
  .about__info__items {
    margin-top: 1rem;
    margin-bottom: 10rem;    
  }
  .about__info__item {
    margin-bottom: 10rem;
    color: #808080;
  }
 .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  h1 {
    margin-bottom: 18vh;
    margin-left: 5vw;
    color: #1E1E1E;
  }
  
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
      text-decoration: underline;
    }
  }
`;



export default function AboutMe() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__heading">
                Aaron Ferguson</p>
              <h2 className="about__subheading">Web Developer | Artist</h2>
              <div className="about__info">
                <PText>
                  I live in Lyons, Colorado. A place of beauty and
                  nature. Since my childhood, I've loved art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started coding for fun about 7 years ago, and made my dream of making it a livelihood in 2018. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br /> <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>             
            </div>
            <div className="right"><GiSonicBoom />
              <img src={floor} alt="me" className=""/>
              <GiSonicBoom />
            </div>
          </div>
        <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2018-2021"
                items={['Full Stack Developer Front End {focused} at Spooner']}
              />
              <AboutInfoItem
                title="2018-2021"
                items={['BootStrap Master at LDJ industries ']}
              />
              <AboutInfoItem
                title="2018-2021"
                items={['eCommerce website/web master @ Decal Outlaw']}
              />
            </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="SCHOOL"
                items={['Poland Seminary High School', 'Poland, Ohio']}
              />
              <AboutInfoItem
                title="COLLEGE"
                items={['Youngstown State University', 'Youngstown, Ohio']}
              />
              <AboutInfoItem
                title="TECH"
                items={['We Can Code IT : Full Stack Developer', 'Cleveland, Ohio']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Sql', 'PHP', '.Net']}
              />
              <AboutInfoItem
                title="Design"
                items={['Blender', 'Gimp']}
              />
            </div>            
          </div>
        </div>       
      </AboutPageStyles>
    </>
  );
}
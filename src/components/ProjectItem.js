import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Decal from '../assets/images/decalOut.jpg'

const ProjectItemStyles = styled.div`
padding: 2rem 0 10rem 0;
background-color: #818283;
  .projectItem__img {
    margin-left: 7.5rem;
    width: 64%;
    height: 400px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    border: 3px solid grey;
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    margin-left: .5rem;
    padding-left: 1rem;
    display: flex;
    justify-content: center;
    font-size: 2.2rem;
    color: #BCB4B4;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-left: 2rem;
    paddin-left: 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({  
  title = 'Decal OutLaw',
  desc = 'eCommerce site that was my first ever paid project using WordPress.',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/about" className="projectItem__img">
        <img src={Decal} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="/">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
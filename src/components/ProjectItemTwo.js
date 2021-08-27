import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Clone from '../assets/images/redClone.jpg'


const ProjectItemTwoStyles = styled.div `
padding: 2rem 0 10rem 0;
background-color: #818283;
  .projectItem__img {
    margin-left: .5rem;
    width: 64%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
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
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    margin-left: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItemTwo({  
    title = 'Reddit Clone',
    desc = 'ReactJS clone of social media app Reddit, well just because',
  }) {
    return (
      <ProjectItemTwoStyles>
        <Link to="/about" className="projectItem__img">
          <img src={Clone} alt="project img" />
        </Link>
        <div className="projectItem__info">
          <Link to="/">
            <h3 className="projectItem__title">{title}</h3>
          </Link>
          <p className="projectItem__desc">{desc}</p>
        </div>
      </ProjectItemTwoStyles>
    );
  }
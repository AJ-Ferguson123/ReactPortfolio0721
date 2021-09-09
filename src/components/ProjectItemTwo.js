import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Clone from '../assets/images/redClone.jpg'


const ProjectItemTwoStyles = styled.div `
padding: 2rem 0 10rem 0;
background-color: #1e1e1e;
  .projectItem__img {
    margin-left: 3.5rem;
    width: 64%;
    height: 400px;
    border-radius: 10px;
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
    padding-left: 2rem;  
    font-size: 2.2rem;
    color: #808080;
    background: rgb(0,212,255);
    background: linear-gradient(0deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); 
  }
  .projectItem__desc {
    color: #BCB4B4;
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
    desc = 'ReactJS clone of social media app Reddit, well just because',
  }) {
    return (
      <ProjectItemTwoStyles>
        <Link to="/about" className="projectItem__img">
          <img src={Clone} alt="project img" />
        </Link>
        <div className="projectItem__info">
          <Link to="https://github.com/AJ-Ferguson123/redditclient">
          </Link>
          <p className="projectItem__desc">{desc}</p>
        </div>
      </ProjectItemTwoStyles>
    );
  }
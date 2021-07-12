import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const MapStyles = styled.div`
  background: #262626;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    text-align: center;
    right: 35%;
    bottom: 2%;
    padding: 2rem;
    background: #1E1E1E;
    color: #BCB4B4;
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here I Am</h3>
          <PText>Lyons, Colorado</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Lyons,+CO/@40.2233804,-105.2859206,14z/data=!3m1!4b1!4m5!3m4!1s0x876bdff42b432cab:0x8faa337863246c0a!8m2!3d40.2247075!4d-105.271378"
            target="_blank"
            rel="noreferrer"
          >
            OPEN GOOGLE MAPS
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
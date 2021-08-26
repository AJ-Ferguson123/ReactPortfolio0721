import React from 'react';
import { FaCity, FaReact } from 'react-icons/fa';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  .ServicesSectionItem .icon{
    width: 3rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Services" heading="Below" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<FaCity size={21} />}
            title="Web Design"
            desc="I complete UI/UX design for websites that create a unique look as well as ease of use for the end user."
          />
          <ServicesSectionItem
            icon={<FaReact size={31} />}
            title="Full Stack Developer"
            desc="I use my tech stack to develop complete websites with a focus on security and optimal speed."
          />          
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
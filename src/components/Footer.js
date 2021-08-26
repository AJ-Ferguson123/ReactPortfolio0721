import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: #1E1E1E;
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;    
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: #262626;
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {        
      .container {
        div {
          margin-right: 3vw;
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Aaron Ferguson</h1>
          <PText>
            web designer and developer from Boulder, Colorado.
            I enjoy making websites that have unique designs and also have a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Info"
            links={[
              {
                title: '+3304233992',
                path: 'tel:+3304233992',
              },
              {
                title: 'ajferguson@protonmail.com',
                path: 'mailto:ajferguson@protonmail.com',
              },
              {
                title: 'Boulder, Colorado',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 | Aaron Ferguson | Designed            
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
import React from 'react';
import { StyledFooter } from '../StyledComponents/StyledComponents';

const Footer = (props) => {
  return (
    <StyledFooter>
      <a href='https://github.com/elisamartin/twitter-api/'>
        <span role='img' aria-label='laptop'>
          💻
        </span>
      </a>
    </StyledFooter>
  );
};

export default Footer;

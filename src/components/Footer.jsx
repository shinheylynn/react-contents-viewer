import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.div``;

const ChevronUp = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: var(--grey);
  &:hover {
    cursor: pointer;
  }
`;

const Footer = () => {
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <ChevronUp icon={faCircleChevronUp} onClick={MoveToTop}>
        ^
      </ChevronUp>
    </FooterContainer>
  );
};

export default Footer;

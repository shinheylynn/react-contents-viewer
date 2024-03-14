import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { flexCenter } from '../utils/mixin';

const BannerContainer = styled.div`
  border: 1px solid red;
  padding: 25px 25px 0px 25px;
`;

const BannerLink = styled.a`
  text-decoration: none;
  color: black;
`;

const BannerLinkProps = styled.div`
  border-radius: 10px;
  box-shadow: 2px 3px 3px 0px lightgrey;
`;

const BannerImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const BannerTitle = styled.div`
  padding: 5px 10px;
  font-size: 18px;
`;

const BannerSubtitle = styled.div`
  padding: 5px 10px;
  font-size: 13px;
  text-align: right;
`;

const IndicatorContainer = styled.div`
  ${flexCenter()};
  padding: 15px 0px;
`;

const Indicator = styled(FontAwesomeIcon)`
  padding: 0px 5px;
  font-size: 7px;
  color: #e2e2e2;
`;

function Banners() {
  return (
    <BannerContainer>
      <BannerLink href="#" target="_blank" rel="noopener noreferrer">
        <BannerLinkProps>
          <BannerImg src="./img/mCountDown.jpeg" alt="M Count Down Image" />
          <BannerTitle>타이틀</BannerTitle>
          <BannerSubtitle>날짜</BannerSubtitle>
        </BannerLinkProps>
      </BannerLink>
      <IndicatorContainer>
        <Indicator icon={faCircle}></Indicator>
        <Indicator icon={faCircle}></Indicator>
        <Indicator icon={faCircle}></Indicator>
        <Indicator icon={faCircle}></Indicator>
        <Indicator icon={faCircle}></Indicator>
      </IndicatorContainer>
    </BannerContainer>
  );
}

export default Banners;

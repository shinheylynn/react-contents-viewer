import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  border: 1px solid red;
  width: 90%;
`;

const BannerLink = styled.a`
  text-decoration: none;
  color: black;
  border: 2px solid green;
`;

const BannerImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const BannerTitle = styled.h4``;
const BannerSubtitle = styled.div``;

function Banners() {
  return (
    <BannerContainer>
      <BannerLink href="#" target="_blank" rel="noopener noreferrer">
        <BannerImg src="./img/mCountDown.jpeg" alt="M Count Down Image" />
        <BannerTitle>타이틀</BannerTitle>
        <BannerSubtitle>날짜</BannerSubtitle>
      </BannerLink>
    </BannerContainer>
  );
}

export default Banners;

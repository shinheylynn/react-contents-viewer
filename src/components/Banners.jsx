import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { flexCenter, overflowEllipsis } from '../utils/mixin';
import bannersData from '../data/bannersData.json';

const BannerContainer = styled.div`
  padding: 15px 20px 0px 20px;
  background-color: lightgrey;
  width: 100%;
  height: 300px;
`;

const BannerLinkContainer = styled.div`
  display: flex;
`;

const BannerLink = styled.a`
  text-decoration: none;
  color: black;
`;

const BannerLinkProps = styled.div`
  border-radius: 10px;
  background-color: white;
  height: 250px;
`;

const BannerImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 75%;
`;

const BannerTitle = styled.div`
  padding-top: 13px;
  ${overflowEllipsis};
  width: 70%;
  height: 13%;
  font-size: 15px;
  font-weight: 600;
  padding-left: 10px;
`;

const BannerSubtitle = styled.div`
  ${flexCenter('flex-end', 'center')};
  height: 12%;
  font-size: 12px;
  padding-right: 10px;
`;

const Arrow = styled.div`
  display: block;
  margin: 0px 5px;
`;

const Banners = ({ data: categoryId }) => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Arrow className={className} style={{ ...style }} onClick={onClick} />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Arrow className={className} style={{ ...style }} onClick={onClick} />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  useEffect(() => {
    if (categoryId) setSelectedCategoryId(categoryId);
  }, [categoryId]);

  console.log(categoryId);
  console.log(selectedCategoryId);
  console.log(bannersData[categoryId]);
  console.log(Array.isArray(bannersData[categoryId]));

  return (
    <BannerContainer>
      <Slider {...settings}>
        {bannersData &&
          categoryId &&
          Array.isArray(bannersData[categoryId]) &&
          bannersData[categoryId].map((item) => (
            <BannerLinkContainer key={item.id}>
              <BannerLink
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BannerLinkProps>
                  <BannerImg src={item.imageSrc} alt="M Count Down Image" />
                  <BannerTitle>{item.title}</BannerTitle>
                  <BannerSubtitle>{item.subtitle}</BannerSubtitle>
                </BannerLinkProps>
              </BannerLink>
            </BannerLinkContainer>
          ))}
      </Slider>
    </BannerContainer>
  );
};

export default Banners;

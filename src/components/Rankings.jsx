import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  flexCenter,
  overflowEllipsis,
  invisibleScrollBar,
} from '../utils/mixin';

import rankingsData from '../data/rankingsData.json';

const RankingsContainer = styled.div`
  ${flexCenter('flex-start', 'center')};
  margin: 20px;
  flex-direction: column;
  background-color: #a8a8a8;
  width: 90%;
  height: 480px;
  border-radius: 10px;
`;

const RankingsTitleConatiner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 90%;
`;

const RankingsTitle = styled.button`
  color: var(--white);
  font-size: 21px;
  font-weight: 500;
  padding: 20px 0px;
`;

const Chevron = styled(FontAwesomeIcon)`
  color: var(--white);
  font-size: 15px;
`;

const RankingList = styled.div`
  color: var(--white);
  width: 90%;
  padding: 0px 0px 20px 0px;
  overflow-y: scroll;
  ${invisibleScrollBar};
`;

const RankingProps = styled.div`
  display: flex;
  flex-direction: row;
`;

const RankingImgContainer = styled.div`
  width: 60px;
  height: 60px;
`;

const RankingImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
`;

const RankingInfo = styled.div`
  display: grid;
  grid-template-columns: 12% 70%;
  grid-template-rows: repeat(2, 1fr);
  width: 300px;
  margin-top: 5px;
`;

const RankingNum = styled.div`
  ${flexCenter('center', 'flex-start')};
  font-size: 17px;
`;

const RankingTitle = styled.div`
  ${overflowEllipsis};
  width: 100%;
  font-size: 17px;
  max-width: 100%;
  min-width: 0;
`;

const RankingChange = styled.div`
  ${flexCenter('center', 'flex-start')};
  color: #747474;
`;

const RankingArtist = styled.div`
  font-size: 15px;
  color: #747474;
`;

const Rankings = () => {
  const itemsPerPage = 7;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const rankingListRef = useRef(null);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
  };

  const handleScroll = () => {
    if (rankingListRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = rankingListRef.current;

      if (scrollTop + clientHeight + 50 >= scrollHeight) {
        loadMoreItems();
      }
    }
  };

  useEffect(() => {
    const rankingsContainer = rankingListRef.current;
    if (rankingsContainer) {
      rankingsContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (rankingsContainer) {
        rankingsContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <RankingsContainer>
      <RankingsTitleConatiner>
        <RankingsTitle>Physical Album Chart</RankingsTitle>
        <Chevron icon={faChevronRight}></Chevron>
      </RankingsTitleConatiner>

      <RankingList ref={rankingListRef}>
        {rankingsData.slice(0, visibleItems).map((item) => (
          <RankingProps key={item.id}>
            <RankingImgContainer>
              <RankingImg src={item.imageSrc} alt="앨범표지"></RankingImg>
            </RankingImgContainer>
            <RankingInfo>
              <RankingNum>{item.num}</RankingNum>
              <RankingTitle>{item.title}</RankingTitle>
              <RankingChange>{item.change}</RankingChange>
              <RankingArtist>{item.artist}</RankingArtist>
            </RankingInfo>
          </RankingProps>
        ))}
      </RankingList>
    </RankingsContainer>
  );
};

export default Rankings;

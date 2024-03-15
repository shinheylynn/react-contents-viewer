import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { flexCenter, overflowEllipsis } from '../utils/mixin';

const RankingsContainer = styled.div`
  margin: 20px;
  ${flexCenter()};
  flex-direction: column;
  background-color: #a8a8a8;
  width: 90%;
  border-radius: 10px;
`;

const RankingsTitleConatiner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 90%;
`;

const RankingsTitle = styled.div`
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

function Rankings() {
  return (
    <RankingsContainer>
      <RankingsTitleConatiner>
        <RankingsTitle>Physical Album Chart</RankingsTitle>
        <Chevron icon={faChevronRight}></Chevron>
      </RankingsTitleConatiner>

      {/* todo: RankingList map 돌리기 */}
      <RankingList>
        <RankingProps>
          <RankingImgContainer>
            <RankingImg
              src="./img/houseOfTricky.jpeg"
              alt="앨범표지"
            ></RankingImg>
          </RankingImgContainer>
          <RankingInfo>
            <RankingNum>1</RankingNum>
            <RankingTitle>HOUSE OF TRICKY: Trial And Error</RankingTitle>
            <RankingChange>-</RankingChange>
            <RankingArtist>싸이커스</RankingArtist>
          </RankingInfo>
        </RankingProps>

        <RankingProps>
          <RankingImgContainer>
            <RankingImg
              src="./img/houseOfTricky.jpeg"
              alt="앨범표지"
            ></RankingImg>
          </RankingImgContainer>
          <RankingInfo>
            <RankingNum>1</RankingNum>
            <RankingTitle>HOUSE OF TRICKY: Trial And Error</RankingTitle>
            <RankingChange>-</RankingChange>
            <RankingArtist>싸이커스</RankingArtist>
          </RankingInfo>
        </RankingProps>

        <RankingProps>
          <RankingImgContainer>
            <RankingImg
              src="./img/houseOfTricky.jpeg"
              alt="앨범표지"
            ></RankingImg>
          </RankingImgContainer>
          <RankingInfo>
            <RankingNum>1</RankingNum>
            <RankingTitle>HOUSE OF TRICKY: Trial And Error</RankingTitle>
            <RankingChange>-</RankingChange>
            <RankingArtist>싸이커스</RankingArtist>
          </RankingInfo>
        </RankingProps>
      </RankingList>
    </RankingsContainer>
  );
}

export default Rankings;

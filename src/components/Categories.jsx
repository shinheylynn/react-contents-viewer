import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../utils/mixin';

const Footer = styled.footer`
  border: 1px solid blue;
  width: 100%;
  background-color: #ffb0b2;
`;

const CategoryContainer = styled.div`
  ${flexCenter('space-around', 'center')};
  padding: 10px 10px;
`;

const Category = styled.button`
  font-size: 20px;
  font-weight: 700;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

function Categories() {
  return (
    <Footer>
      <CategoryContainer>
        <Category>차트</Category>
        <Category>Whook</Category>
        <Category>이벤트</Category>
        <Category>뉴스</Category>
        <Category>스토어</Category>
        <Category>충전소</Category>
      </CategoryContainer>
    </Footer>
  );
}

export default Categories;

import React from 'react';
import styled from 'styled-components';
import flexCenter from './utils/mixin';

const Footer = styled.footer`
  ${flexCenter};
  border: 1px solid blue;
  width: 100%;
`;
const Category = styled.div``;

function Categories() {
  return (
    <Footer>
      <Category>차트</Category>
      <Category>Whook</Category>
      <Category>이벤트</Category>
      <Category>뉴스</Category>
      <Category>스토어</Category>
      <Category>충전소</Category>
    </Footer>
  );
}

export default Categories;

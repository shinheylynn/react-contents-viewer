import React, { useState } from 'react';
import styled from 'styled-components';
import { invisibleScrollBar } from '../utils/mixin';

const CategoryContainer = styled.div`
  ${invisibleScrollBar};
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  gap: 30px;
  padding-left: 20px;
  width: 100%;
  height: 5%;
  background-color: #ffb0b2;
`;

const Category = styled.button`
  font-size: 18px;
  font-weight: 800;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  cursor: ${(props) => (props.isSelected ? 'pointer' : '')};
`;

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('차트');

  return (
    <CategoryContainer>
      {['차트', 'Whook', '이벤트', '뉴스', '스토어', '충전소'].map(
        (category, index) => (
          <Category
            key={index}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Category>
        ),
      )}
    </CategoryContainer>
  );
}

export default Categories;

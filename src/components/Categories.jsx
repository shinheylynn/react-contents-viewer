import React, { useState } from 'react';
import styled from 'styled-components';
import { invisibleScrollBar } from '../utils/mixin';
import Banners from './Banners.jsx';
import Rankings from './Rankings.jsx';
import categoriesData from '../data/categoriesData.json';

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
  background-color: var(--pink);
`;

const Category = styled.button`
  font-size: 18px;
  font-weight: 800;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  cursor: ${(props) => (props.isSelected ? 'pointer' : '')};
`;

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('차트');

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const selectedCategoryData = categoriesData.find(
    (category) => category.name === selectedCategory,
  ) || { bannersData: [], rankingsData: [] };

  console.log(selectedCategoryData);
  console.log(categoriesData);
  console.log(selectedCategoryData.bannersData);
  console.log(selectedCategoryData.rankingsData);

  return (
    <CategoryContainer>
      {categoriesData.map((category) => (
        <Category
          key={category.id}
          isSelected={selectedCategory === category.name}
          onClick={() => handleCategorySelect(category.name)}
        >
          {category.name}
        </Category>
      ))}
      <Banners data={selectedCategoryData.bannersData} />
      <Rankings data={selectedCategoryData.rankingsData} />
    </CategoryContainer>
  );
};

export default Categories;

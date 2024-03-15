import React from 'react';
import styled from 'styled-components';

import './utils/variables.css';
import { flexCenter } from './utils/mixin';

import Categories from './components/Categories.jsx';
import Banners from './components/Banners.jsx';
import Rankings from './components/Rankings.jsx';

const Container = styled.div`
  ${flexCenter('flex-start', 'center')};
  flex-direction: column;
  font-family: Arial, sans-serif;
  width: 425px;
  height: 900px;
  border: 1px black solid;
  background-color: #ebebeb;
`;

function App() {
  return (
    <Container>
      <Categories />
      <Banners />
      <Rankings />
    </Container>
  );
}

export default App;

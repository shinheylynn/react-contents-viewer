import React from 'react';

import styled from 'styled-components';
import './utils/variables.css';
import { flexCenter } from './utils/mixin';

import Categories from './components/Categories';
import Banners from './components/Banners';
import Rankings from './components/Rankings';

const Container = styled.div`
  ${flexCenter('flex-start', 'center')};
  flex-direction: column;
  font-family: Arial, sans-serif;
  width: 425px;
  min-height: 900px;
  border: 1px black solid;
  background-color: #ebebeb;
`;

function App() {
  return (
    <Container>
      <Categories />
      <Banners />
      <Rankings />
      <footer className="footer">푸터</footer>
    </Container>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

import GlobalStyles from './utils/GlobalStyles';
import './utils/variables.css';
import { flexCenter } from './utils/mixin';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Categories from './components/Categories.jsx';
import Banners from './components/Banners.jsx';
import Rankings from './components/Rankings.jsx';
import Footer from './components/Footer.jsx';

const Container = styled.div`
  ${flexCenter('flex-start', 'center')};
  flex-direction: column;
  font-family: Arial, sans-serif;
  width: 425px;
  height: 900px;
  background-color: #ebebeb;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Container>
      <Categories />
      <Banners />
      <Rankings />
      <Footer />
    </Container>
  </React.StrictMode>,
);

import React from 'react';

import styled from 'styled-components';
import flexCenter from './utils/mixin';

import Categories from './Categories';

const Container = styled.div`
  ${flexCenter('flex-start', 'center')};
  flex-direction: column;
  font-family: Arial, sans-serif;
  width: 425px;
  min-height: 900px;
  border: 1px black solid;
`;

function App() {
  return (
    <Container>
      <Categories />
      <main className="mainContent">본문 내용</main>
      <footer className="footer">푸터</footer>
    </Container>
  );
}

export default App;

import { css } from 'styled-components';

const flexCenter = (justifyContent = 'center', alignItems = 'center') => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export default flexCenter;

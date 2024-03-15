import { css } from 'styled-components';

export const flexCenter = (
  justifyContent = 'center',
  alignItems = 'center',
) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const overflowEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const invisibleScrollBar = css`
  -ms-overflow-style: none; /*IE, Edge*/
  scrollbar-width: none; /*Firefox*/
  ::-webkit-scrollbar {
    display: none; /*Chrome, Safari, Opera*/
    width: 0px;
  }
`;

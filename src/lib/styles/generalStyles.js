import styled from 'styled-components';
import { breakpoints } from './theme';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding-top: 24px;
  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

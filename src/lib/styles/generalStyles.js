import styled from 'styled-components';
import { breakpoints } from './theme';
import morning from '../../assets/images/morning.jpg';
import evening from '../../assets/images/evening.jpg';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding-top: 24px;
  align-items: center;
  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => (props.time < 12 ? morning : evening)});
  background-position: center;
  background-size: cover;
`;

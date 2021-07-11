import styled from 'styled-components';
import { breakpoints } from '../../lib/styles/theme';

export const SectionWrapper = styled.section`
  padding: 0 15px;
  width: 100%;
  min-height: 100vh;
  @media screen and (${breakpoints.tablet}) {
    padding: 0 40px;
  }
  @media screen and (${breakpoints.desktop}) {
    max-width: 944px;
    margin: 0 auto;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1224px;
  }
`;

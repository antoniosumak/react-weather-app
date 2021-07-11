import styled from 'styled-components';
import { breakpoints } from '../../lib/styles/theme';

export const InfoWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 100px;
`;

export const SearchBarWrapper = styled.div`
  @media screen and (${breakpoints.tablet}) {
    max-width: 450px;
    margin: 0 auto;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #333333;

  &:focus {
    border: 1px solid #333333;
    outline: none;
  }
`;

export const NameRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 32px 0px;
`;

export const NameInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CityName = styled.h2`
  padding: 8px 0px;
`;

export const Region = styled.p``;

export const ClockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0px;
`;

export const ClockValues = styled.h2``;

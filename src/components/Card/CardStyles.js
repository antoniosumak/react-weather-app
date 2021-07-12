import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 20px;
  box-shadow: rgba(20, 20, 20, 0.5) 0px 8px 24px;
  height: min-content;
  background-color: #fff;
  border-radius: 10px;
`;

export const IconWrapper = styled.div`
  font-size: 28px;
  text-align: center;
  padding: 12px 0px;
  color: ${(props) => props.currentWeather === 'Clear' && '#ff4500'};
`;

export const DayOfWeek = styled.h3`
  font-weight: 400;
  text-align: center;
`;

export const CurrentTemp = styled.h2`
  text-align: center;
`;

export const MinMaxTemp = styled.p`
  text-align: center;
  padding: 8px 0px;
`;

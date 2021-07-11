import React from 'react';
import { IoCloudy, IoSunny, IoRainy } from 'react-icons/io5';
import {
  CardWrapper,
  IconWrapper,
  DayOfWeek,
  CurrentTemp,
  MinMaxTemp,
} from './CardStyles';
import { days } from '../../lib/script';
const Card = ({ minTemp, maxTemp, weather, date, currentWeather }) => {
  const Icons = {
    Clouds: <IoCloudy />,
    Clear: <IoSunny />,
    Rain: <IoRainy />,
  };

  let dateNew = new Date(date * 1000);

  return (
    <CardWrapper>
      <DayOfWeek>{days[dateNew.getDay()]}</DayOfWeek>
      <IconWrapper currentWeather={weather}>{Icons[weather]}</IconWrapper>
      <CurrentTemp>{currentWeather && `${~~currentWeather[0]}°C`}</CurrentTemp>
      <MinMaxTemp>{`${~~minTemp}°C / ${~~maxTemp}°C`}</MinMaxTemp>
    </CardWrapper>
  );
};

export default Card;

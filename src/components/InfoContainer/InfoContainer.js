import React, { useContext, useState } from 'react';
import {
  InfoWrapper,
  SearchBarWrapper,
  SearchBar,
  NameRow,
  NameInner,
  CityName,
  Region,
  ClockWrapper,
  ClockValues,
} from './InfoContainerStyles';
import { SearchContext } from '../../context/SearchContext';

const InfoContainer = ({ data }) => {
  const date = new Date();
  const [hour, setHour] = useState(date.getHours());
  const [minute, setMinute] = useState(date.getMinutes());
  const [second, setSecond] = useState(date.getSeconds());
  const { setSearchValue, setCity, searchValue, city } =
    useContext(SearchContext);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setCity(searchValue);
  };

  const getTime = () => {
    const date = new Date();
    setHour(date.getHours());
    date.getMinutes() < 10
      ? setMinute('0' + date.getMinutes())
      : setMinute(date.getMinutes());
    date.getSeconds() < 10
      ? setSecond('0' + date.getSeconds())
      : setSecond(date.getSeconds());
  };

  setInterval(getTime, 1000);

  return (
    <InfoWrapper>
      <SearchBarWrapper>
        <form onSubmit={handleSubmit}>
          <SearchBar
            placeholder={'Ime grada...'}
            onChange={(e) => handleSearch(e)}
          />
        </form>
      </SearchBarWrapper>
      <NameRow>
        <NameInner>
          <CityName>{city}</CityName>
          <Region>{data && data.timezone}</Region>
        </NameInner>
      </NameRow>
      <ClockWrapper>
        <ClockValues>{`${hour}:${minute}:${second}`}</ClockValues>
      </ClockWrapper>
    </InfoWrapper>
  );
};

export default InfoContainer;

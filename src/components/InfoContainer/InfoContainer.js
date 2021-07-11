import React, { useContext, useEffect, useState } from 'react';
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
  const date = new Date().toLocaleTimeString();
  const [hours, setHours] = useState(date);
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
    const date = new Date().toLocaleTimeString();
    setHours(date);
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
        <ClockValues>{hours}</ClockValues>
      </ClockWrapper>
    </InfoWrapper>
  );
};

export default InfoContainer;

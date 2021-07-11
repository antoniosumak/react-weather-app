import React, { useContext } from 'react';
import {
  InfoWrapper,
  SearchBarWrapper,
  SearchBar,
} from './InfoContainerStyles';
import { SearchContext } from '../../context/SearchContext';

const InfoContainer = () => {
  const { setSearchValue, setCity, searchValue } = useContext(SearchContext);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setCity(searchValue);
  };

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
    </InfoWrapper>
  );
};

export default InfoContainer;

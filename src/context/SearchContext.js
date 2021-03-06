import React, { useState, createContext } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [city, setCity] = useState('Krapina');
  const [currentTime, setCurrentTime] = useState(0);
  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        city,
        setCity,
        currentTime,
        setCurrentTime,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };

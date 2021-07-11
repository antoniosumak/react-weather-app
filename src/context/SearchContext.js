import React, { useState, createContext } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [city, setCity] = useState('Krapina');
  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, city, setCity }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };

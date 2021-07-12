import React, { useEffect, useState, useContext } from 'react';

import Section from '../components/Section/Section';
import WeatherContainer from '../components/WeatherContainer/WeatherContainer';
import InfoContainer from '../components/InfoContainer/InfoContainer';
import { SearchContext } from '../context/SearchContext';

const Home = () => {
  const [values, setValues] = useState(null);

  const { searchValue, city } = useContext(SearchContext);
  const apiKey = 'c29e85d23ed52ef4c9993487a4f104d9';

  console.log(searchValue);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        return fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=hourly,minutely&units=metric&appid=${apiKey}`
        )
          .then((res) => res.json())
          .then((data) => setValues(data));
      });
  }, [city]);

  return (
    <Section>
      <InfoContainer data={values} />
      <WeatherContainer data={values} />
    </Section>
  );
};

export default Home;

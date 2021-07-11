import React from 'react';
import Card from '../Card/Card';
import { Grid } from '../../lib/styles/generalStyles';

const WeatherContainer = ({ data }) => {
  console.log(data);
  const currentWeather = [];
  data && currentWeather.push(data.current.temp);
  return (
    <Grid>
      {data &&
        data.daily.map(
          (value, index) =>
            index < 5 && (
              <Card
                key={index}
                maxTemp={value.temp.max}
                minTemp={value.temp.min}
                weather={value.weather[0].main}
                date={value.dt}
                currentWeather={index === 0 && currentWeather}
              />
            )
        )}
    </Grid>
  );
};

export default WeatherContainer;

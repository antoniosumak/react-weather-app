import React from 'react';
import Card from '../Card/Card';
import { Grid } from '../../lib/styles/generalStyles';

const WeatherContainer = ({ data }) => {
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
              />
            )
        )}
    </Grid>
  );
};

export default WeatherContainer;

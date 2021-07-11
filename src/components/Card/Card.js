import React from 'react';

const Card = ({ minTemp, maxTemp }) => {
  return (
    <>
      <h2>
        {minTemp}°C / {maxTemp}°C
      </h2>
    </>
  );
};

export default Card;

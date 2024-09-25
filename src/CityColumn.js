// CityColumn.js
import React from 'react';
import Sortable from 'react-sortablejs';

const CityColumn = ({ title, cities, onSort }) => {
  return (
    <div className="city-column">
      <h2>{title}</h2>
      <Sortable
        options={{
          animation: 150,
          group: 'cities',
          onEnd: onSort,
        }}
      >
        {cities.map((city, index) => (
          <div key={index} className="city-item">
            {city}
          </div>
        ))}
      </Sortable>
    </div>
  );
};

export default CityColumn;

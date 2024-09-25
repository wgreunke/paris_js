import React, { useState } from 'react';

const App = () => {
  // Sample data for countries and cities
  const countries = ['Country A', 'Country B', 'Country C'];
  const citiesByCountry = {
    'Country A': ['City A1', 'City A2', 'City A3'],
    'Country B': ['City B1', 'City B2', 'City B3'],
    'Country C': ['City C1', 'City C2', 'City C3'],
  };

  // State variables
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [citiesA, setCitiesA] = useState([]);
  const [citiesB, setCitiesB] = useState([]);

  // Event handler for country selection
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCitiesA(citiesByCountry[country] || []);
  };

  // Event handler for moving a city from B to A
  const moveCityToA = (city) => {
    setCitiesA([...citiesA, city]);
    setCitiesB(citiesB.filter((c) => c !== city));
  };

  // Event handler for printing cities in A box
  const printCitiesInA = () => {
    alert(`Cities in Box A: ${citiesA.join(', ')}`);
  };

  return (
    <div>
      <label>
        Select a Country:
        <select onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>

      <div>
        <div>
          <label>Cities in Box A:</label>
          <ul>
            {citiesA.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>

        <div>
          <label>Cities in Box B:</label>
          <ul>
            {citiesB.map((city) => (
              <li key={city}>
                {city}{' '}
                <button onClick={() => moveCityToA(city)}>Move to A</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button onClick={printCitiesInA}>Print Cities in A</button>
    </div>
  );
};

export default App;

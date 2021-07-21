import { useState } from 'react';

function Country({ items }) {
  const [search, setSearch] = useState('');
  const [clear, setClear] = useState(true);
  // const [state, setState] = useState(false);

  const countryArr = Object.values(items).map((el) => el.All);

  const filterCountryArr = countryArr.filter((elem) => {
    return elem.country && elem.country.toLowerCase().startsWith(search.toLowerCase());
  });
  // console.log(countryArr);
  const clickOnItem = (e) => {
    setSearch(e.target.textContent);
    setClear(!clear);
    // setState(!state);
  };

  const clickOnInput = () => {
    setClear(true);
  };

  return (
    <div className="page__country">
      <div className="page__country-filter">
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={clickOnInput}
          />
          {search.length && clear ? (
            <ul className="autocomplete">
              {filterCountryArr.map((elem, i) => (
                <li className="autocomplete__item" key={i} onClick={clickOnItem}>
                  {elem.country}
                </li>
              ))}
            </ul>
          ) : null}
        </form>
      </div>
      {/* "confirmed": 2604595,
    "recovered": 195365,
    "deaths": 62548,
    "population": 64979548,
    "updated": "2020/12/26 12:21:56+00" */}
      <div className="page__country-info">
        {search &&
          countryArr.map(
            (elem, i) =>
              elem.country === search && (
                <div className="info">
                  <div className="info-item" key={i}>
                    Country: {elem.country}
                  </div>
                  <div className="info-item" key={i}>
                    Capital city: {elem.capital_city}
                  </div>
                  <div className="info-item" key={i}>
                    Continent: {elem.continent}
                  </div>
                  <div className="info-item" key={i}>
                    Location: {elem.location}
                  </div>
                  <div className="info-item" key={i}>
                    Sq/km area: {elem.sq_km_area}
                  </div>
                  <div className="info-item" key={i}>
                    Life expectancy: {elem.life_expectancy}
                  </div>
                  <div className="info-item" key={i}>
                    Population: {elem.population}
                  </div>
                  <div className="info-item" key={i}>
                    Confirmed: {elem.confirmed}
                  </div>
                  <div className="info-item" key={i}>
                    Recovered: {elem.recovered}
                  </div>
                  <div className="info-item" key={i}>
                    Deaths: {elem.deaths}
                  </div>
                </div>
              ),
          )}
      </div>
    </div>
  );
}

export default Country;

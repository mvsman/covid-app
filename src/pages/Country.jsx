import { useState } from 'react';
import CountryInfo from './CountryInfo';

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

  const clickOnInput = () => setClear(true);

  return (
    <div className="page__country">
      <div className="page__country-search">
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
        {search &&
          countryArr.map(
            (elem, i) =>
              elem.country === search && (
                <div className="info-country">
                  <p key={i}>Country: {elem.country}</p>
                  <p key={i}>Capital city: {elem.capital_city}</p>
                  <p key={i}>Continent: {elem.continent}</p>
                  <p key={i}>Location: {elem.location}</p>
                  <p key={i}>
                    Square area: {elem.sq_km_area}km<sup>2</sup>
                  </p>
                </div>
              ),
          )}
      </div>

      <div className="page__country-info">
        <CountryInfo arr={countryArr} searching={search} />
      </div>
    </div>
  );
}

export default Country;

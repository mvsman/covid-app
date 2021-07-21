import { useState } from 'react';
import CountryInfo from '../components/CountryInfo';
import CovidInfo from '../components/CovidInfo';

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
        <CountryInfo arr={countryArr} searching={search} />
      </div>

      <div className="page__country-info">
        <CovidInfo arr={countryArr} searching={search} />
      </div>
    </div>
  );
}

export default Country;

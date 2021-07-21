function CountryInfo({ arr, searching }) {
  return (
    <div>
      {searching &&
        arr.map(
          (elem, i) =>
            elem.country === searching && (
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
  );
}

export default CountryInfo;

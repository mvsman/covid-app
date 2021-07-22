function CountryInfo({ selection }) {
  return (
    <div>
      {selection &&
        selection.map((elem, i) => (
          <div className="info-country">
            <p key={i + 8}>Country: {elem.country}</p>
            <p key={i + 9}>Capital city: {elem.capital_city}</p>
            <p key={i + 10}>Continent: {elem.continent}</p>
            <p key={i + 11}>Location: {elem.location}</p>
            <p key={i + 12}>
              Square area: {elem.sq_km_area}km<sup>2</sup>
            </p>
          </div>
        ))}
    </div>
  );
}

export default CountryInfo;

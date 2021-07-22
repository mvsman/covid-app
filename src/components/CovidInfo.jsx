function CovidInfo({ selection }) {
  return (
    <div>
      {selection.length
        ? selection.map((elem, i) => (
            <div className="info">
              <div className="info-item population" key={i}>
                Population: {elem.population}
              </div>
              <div className="info-item population" key={i + 1}>
                Life expectancy: {elem.life_expectancy}
              </div>
              <div className="info-item confirmed" key={i + 2}>
                Confirmed: {elem.confirmed}
              </div>
              <div className="info-item recovered" key={i + 3}>
                Recovered: {elem.recovered}
              </div>
              <div className="info-item confirmed" key={i + 4}>
                Infections per km<sup>2</sup>: {(elem.confirmed / elem.sq_km_area).toFixed(1)}
              </div>
              <div className="info-item confirmed" key={i + 5}>
                Infections per thousand: {((elem.confirmed / elem.population) * 1000).toFixed(1)}
              </div>
              <div className="info-item deaths" key={i + 6}>
                Mortality rate: {((elem.deaths / elem.confirmed) * 100).toFixed(1)} %
              </div>
              <div className="info-item deaths" key={i + 7}>
                Deaths: {elem.deaths}
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default CovidInfo;

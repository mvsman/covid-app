function CovidInfo({ arr, searching }) {
  return (
    <div>
      {searching &&
        arr.map(
          (elem, i) =>
            elem.country === searching && (
              <div className="info">
                <div className="info-item population" key={i}>
                  Population: {elem.population}
                </div>
                <div className="info-item population" key={i}>
                  Life expectancy: {elem.life_expectancy}
                </div>
                <div className="info-item confirmed" key={i}>
                  Confirmed: {elem.confirmed}
                </div>
                <div className="info-item recovered" key={i}>
                  Recovered: {elem.recovered}
                </div>
                <div className="info-item confirmed" key={i}>
                  Infections per km<sup>2</sup>: {(elem.confirmed / elem.sq_km_area).toFixed(1)}
                </div>
                <div className="info-item confirmed" key={i}>
                  Infections per thousand: {((elem.confirmed / elem.population) * 1000).toFixed(1)}
                </div>
                <div className="info-item deaths" key={i}>
                  Mortality rate: {((elem.deaths / elem.confirmed) * 100).toFixed(1)} %
                </div>
                <div className="info-item deaths" key={i}>
                  Deaths: {elem.deaths}
                </div>
              </div>
            ),
        )}
    </div>
  );
}

export default CovidInfo;

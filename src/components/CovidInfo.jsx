function CovidInfo({ selection }) {
  return (
    <div>
      {selection.length
        ? selection.map((elem, i) => (
            <div className="info">
              <div className="info__item population" key={i}>
                <span className="info__item-title">Population</span>
                <span className="info__item-elem">
                  {elem.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                </span>
              </div>
              <div className="info__item population" key={i + 1}>
                <span className="info__item-title">Life expectancy</span>
                <span className="info__item-elem">{elem.life_expectancy}</span>
              </div>
              <div className="info__item confirmed" key={i + 2}>
                <span className="info__item-title">Confirmed</span>
                <span className="info__item-elem">
                  {elem.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                </span>
              </div>
              <div className="info__item recovered" key={i + 3}>
                <span className="info__item-title">Recovered</span>
                <span className="info__item-elem">
                  {elem.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                </span>
              </div>
              <div className="info__item confirmed" key={i + 4}>
                <span className="info__item-title">
                  Infections per km<sup>2</sup>
                </span>
                <span className="info__item-elem">
                  {(elem.confirmed / elem.sq_km_area).toFixed(1)}
                </span>
              </div>
              <div className="info__item confirmed" key={i + 5}>
                <span className="info__item-title">Infections per thousand</span>
                <span className="info__item-elem">
                  {((elem.confirmed / elem.population) * 1000).toFixed(1)}
                </span>
              </div>
              <div className="info__item deaths" key={i + 6}>
                <span className="info__item-title">Deaths</span>
                <span className="info__item-elem">
                  {elem.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                </span>
              </div>
              <div className="info__item deaths" key={i + 7}>
                <span className="info__item-title">Mortality rate, %</span>
                <span className="info__item-elem">
                  {((elem.deaths / elem.confirmed) * 100).toFixed(1)}
                </span>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default CovidInfo;

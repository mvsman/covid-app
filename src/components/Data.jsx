function Data({ items }) {
  // let arr = Object.values(items).map(a => Object.values(a))
  console.log(Object.values(items));

  return (
    <div>
      <ul>
        {Object.values(items).map((elem) => (
          <li>
            Country: {elem.All.country} | Confirmed: {elem.All.confirmed} | Recovered:{' '}
            {elem.All.recovered} | Deaths: {elem.All.deaths} | Population: {elem.All.population}
          </li>
        ))}
      </ul>
    </div>

    // <>
    //   {Object.values(items)}
    // </>
  );
}

export default Data;

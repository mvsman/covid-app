function World({ items }) {
  const worldArr = Object.values(items).map((el) => el.All);
  // console.log(worldArr);

  return (
    <div>
      {worldArr.map(
        (elem) =>
          elem.population > 7e9 && (
            <div>
              <div>{elem.population}</div>
              <div>{elem.confirmed}</div>
              <div>{elem.recovered}</div>
              <div>{elem.deaths}</div>
            </div>
          ),
      )}
    </div>
  );
}

export default World;

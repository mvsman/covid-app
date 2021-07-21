function Description({ items }) {
  const descArr = Object.values(items).map((el) => el.All);
  const item = { ...descArr[descArr.length - 1] };
  const confirm = Math.floor(item.confirmed / 1e6);
  const recover = Math.floor(item.recovered / 1e6);
  const death = Math.floor(item.deaths / 1e6);

  return (
    <div>
      <p>
        Пандемия COVID-19 — текущая пандемия, вызванная распространением коронавируса SARS-CoV-2.
      </p>
      <hr />
      <p>
        Вспышка заболеваемости вирусом впервые была зафиксирована в Ухане, Китай, в декабре 2019
        года. 30 января 2020 года Всемирная организация здравоохранения объявила эту вспышку
        чрезвычайной ситуацией в области общественного здравоохранения, имеющей международное
        значение, а 11 марта — пандемией. На сегодня зарегистрировано свыше {confirm} млн случаев
        заболевания по всему миру; более {death} млн человек скончалось и более {recover} млн
        выздоровело.
      </p>
      <p>
        В основном вирус SARS-CoV-2 передаётся при тесном контакте, чаще всего через небольшие
        капли, образующиеся при кашле, чихании и разговоре. Капли обычно падают на землю или на
        поверхности, а не перемещаются по воздуху на большие расстояния. Передача может также
        происходить через более мелкие капли, которые способны оставаться взвешенными в воздухе в
        течение более длительных периодов времени.
      </p>
      <p>
        К распространённым симптомам относятся лихорадка, кашель, утомление, одышка и аносмия
        (потеря обоняния), возможна заложенность ушей. При осложнениях могут возникать острый
        респираторный дистресс-синдром (ОРДС) и пневмония (воспаление лёгких).
      </p>
      <p>
        В качестве профилактических мер рекомендуются мытьё рук, прикрывать рот и нос локтевым
        сгибом при кашле или чихании, социальное дистанцирование, ношение защитной маски в
        общественных местах, дезинфекция поверхностей, увеличение вентиляции и фильтрации воздуха в
        помещении, а также мониторинг и самоизоляция для людей, подозревающих, что они инфицированы.
      </p>
      <p>
        Пандемия COVID-19 стала причиной серьёзных социально-экономических последствий, включая
        крупнейшую мировую рецессию после Великой депрессии и массовый голод, затронувший около 265
        млн человек.
      </p>
    </div>
  );
}

export default Description;

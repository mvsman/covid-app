import useLocalStorage from '../UseLocalStorage';
import {
  CartesianGrid,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
} from 'recharts';
import axios from '../axios';
import { useEffect } from 'react';

function World({ fetchUrl, fetchUrl2, fetchUrl3 }) {
  const [confirmed, setConfirmed] = useLocalStorage('confirmed', []);
  const [deaths, setDeaths] = useLocalStorage('deaths', []);
  const [recovered, setRecovered] = useLocalStorage('recovered', []);
  // ---------------------------------------------------------------
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setConfirmed(request.data.Global.All.dates);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const key = Object.keys(confirmed);
  const value = Object.values(confirmed);
  const data = [];
  // ---------------------------------------------------------------
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl3);
      setRecovered(request.data.Global.All.dates);
      return request;
    }
    fetchData();
  }, [fetchUrl3]);
  const value2 = Object.values(recovered);
  // ---------------------------------------------------------------
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl2);
      setDeaths(request.data.Global.All.dates);
      return request;
    }
    fetchData();
  }, [fetchUrl2]);
  const value3 = Object.values(deaths);
  // ---------------------------------------------------------------
  for (let i = 200; i >= 0; i--) {
    data.push({
      k: key[i],
      Confirmed: value[i],
      Recovered: value2[i],
      Deaths: value3[i],
    });
  }

  return (
    <div className="statistic">
      <ResponsiveContainer width="70%" height={500}>
        <LineChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="k" tickFormatter={(s) => s.slice(2, 7).replace('-', '/')} />
          <YAxis
            dataKey="Confirmed"
            axisLine={false}
            tickLine={false}
            tickCount={7}
            tickFormatter={(n) => Math.floor(n / 1e6)}
          />
          <Tooltip />
          <Line type="monotone" dataKey="Confirmed" stroke="red" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="Recovered" stroke="green" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="Deaths" stroke="grey" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>

      <div className="statistic__info">
        <div className="statistic__item confirmed">
          <span className="info__item-title">Confirmed</span>
          <span className="info__item-elem">{data[200].Confirmed}</span>
          <span className="info__item-day">
            + {data[200].Confirmed - data[199].Confirmed} per day
          </span>
        </div>
        <div className="statistic__item recovered">
          <span className="info__item-title">Recovered</span>
          <span className="info__item-elem">{data[200].Recovered}</span>
          <span className="info__item-day">
            + {data[200].Recovered - data[199].Recovered} per day
          </span>
        </div>
        <div className="statistic__item deaths">
          <span className="info__item-title">Deaths</span>
          <span className="info__item-elem">{data[200].Deaths}</span>
          <span className="info__item-day">+ {data[200].Deaths - data[199].Deaths} per day</span>
        </div>
      </div>
    </div>
  );
}

export default World;

import ReactApexChart from 'react-apexcharts';
import { candleStickData } from '../../../constants/data';
import "./CandleStick.scss";
const CandleStickChart = () => {
  const state: { series: any, options: any } = {
    series: [
      {
        name: 'Data',
        data: [...candleStickData]
      },
    ],
    options: {
      chart: {
        selection: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        type: "candlestick",
        height: 350,
      },
      title: {
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        showAlways: true,
        tooltip: {
          enabled: true,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#49DC48",
            downward: "#0B1BD2",
          },
          wick: {
            useFillColor: true,
          },
        },
      },
    },
  };
  return (
    <>
      <div id="chart" className='candleChartOuter'>
        <div className='candleChartVerticle'>Projected forecast</div>
        <ReactApexChart
          options={state?.options}
          series={state.series}
          type="candlestick"
          height={350}
        />
        <div className='candleChartHorizontal'>Time (Days)</div>
      </div>
    </>
  )
}

export default CandleStickChart
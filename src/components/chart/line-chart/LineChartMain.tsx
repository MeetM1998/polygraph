import { LineChart, Line, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";
import { lineChartData } from "../../../constants/data";
import "./LineChartMain.scss";
const LineChartMain = () => {
  return (
    <div className="lineChartOuter">
      <div className="lineChartVerticle">Discordance</div>
      <div className="lineChartInner">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={lineChartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis></XAxis>
            <YAxis></YAxis>

            <Line type="basis" dataKey="pv" stroke="#0b1bd2" strokeWidth="2" dot={false} />
            <Line type="basis" dataKey="uv" stroke="#8dc73f" strokeWidth="2" dot={false} />
            <Legend></Legend>
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="lineChartHorizontal">Time Since Event Start (seconds)</div>
    </div>
  );
};

export default LineChartMain;

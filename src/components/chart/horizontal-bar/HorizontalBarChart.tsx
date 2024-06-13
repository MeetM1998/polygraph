import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { horizontalChartData } from "../../../constants/data";

const HorizontalBarChart = () => {
  return (
    <>
      <ResponsiveContainer>
        <BarChart
          data={horizontalChartData}
          layout="vertical"
          barCategoryGap={25}
          margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
        >
          <XAxis type="number" hide />
          <YAxis type="category" width={150} padding={{ top: 10 }} dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#0B1BD2" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default HorizontalBarChart;

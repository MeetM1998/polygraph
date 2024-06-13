import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { radarChartData } from "../../../constants/data";

const RadarChartMain = () => {
  const PolarRadiusAxisTemp: string | number | undefined | any = PolarRadiusAxis;
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
          <PolarGrid gridType="circle" />
          <PolarAngleAxis textRendering={PolarRadiusAxisTemp} dataKey="subject" fontSize={15} />
          <PolarRadiusAxis angle={-180} domain={[1, 10]} tickCount={10} stroke="#000" fontSize={15} />
          <Radar dataKey="A" stroke="#e9eea4" fill="#e9eea4" fillOpacity={0.6} />
          <Radar dataKey="B" stroke="#0B1BD2" fill="#0B1BD2" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};

export default RadarChartMain;

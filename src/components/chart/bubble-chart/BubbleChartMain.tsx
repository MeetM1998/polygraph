import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ZAxis, ReferenceLine, Cell } from "recharts";
import { bubbleChartData } from "../../../constants/data";

const BubbleChartMain = () => {
  return (
    <>
      <ScatterChart width={500} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid />
        <XAxis type="number" domain={[-250, 300]} dataKey="x" name="stature" fontSize={13} />
        <YAxis type="number" domain={[-350, 350]} dataKey="y" name="weight" fontSize={13} />
        <ZAxis type="number" dataKey="z" range={[60, 5000]} name="score" unit="km" />
        <Scatter name="A school" data={bubbleChartData} fill="#8884d8">
          {bubbleChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} stroke="#0B1BD2" strokeWidth={2} />
          ))}
        </Scatter>
        <ReferenceLine y={0} stroke="#49DC48" strokeWidth={2} />
        <ReferenceLine x={0} stroke="#49DC48" strokeWidth={2} />
        <ReferenceLine
          segment={[
            { x: 0, y: 0 },
            { x: 0, y: 0 },
          ]}
          label={{ value: "(0 ,0)", position: "bottom", fontSize: "15px", color: "#000" }}
        />
      </ScatterChart>
    </>
  );
};

export default BubbleChartMain;

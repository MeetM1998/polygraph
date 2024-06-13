import { Grid } from "@mui/material";
import "./CompanyFuture.scss";
import CandleStickChart from "../chart/candle-stick-chart/CandleStickChart";
import RadarChartMain from "../chart/radar/RadarChartMain";
const CompanyFuture = () => {
  return (
    <Grid className="company-container" container spacing={3} marginTop={1}>
      <Grid item xs>
        <div className="gridCardLarge">
          <div className="gridCardHeaderInner">
            Confidence in the Company s Future
          </div>
          <div className="gridCardContentInner">
            Across 18 key models, the projection of future performance is mapped
            across 0,30,60 and 90 days. Consensus among the models is the best
            outcome.
          </div>
          <div className="candleChartParentBlock">
            <CandleStickChart />
          </div>
        </div>
      </Grid>
      <Grid item xs>
        <div className="gridCardLarge">
          <div className="gridCardHeaderInner">
            Emotional State of Leadership
          </div>
          <div className="gridCardContentInner">
            Satya Nadella: Confident (65.4%), Happy (32.1%)
          </div>
          <div className="radarChartParentBlock">
            <RadarChartMain />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default CompanyFuture;

import { Grid } from "@mui/material";
import HorizontalBarChart from "../chart/horizontal-bar/HorizontalBarChart";
import "./IndustryVsCompany.scss";
import BubbleChartMain from "../chart/bubble-chart/BubbleChartMain";
const IndustryVsCompany = () => {
  return (
    <Grid container spacing={3} marginTop={1}>
      <Grid item xs>
        <div className="gridCardLarge">
          <div className="gridCardHeaderInner">Industry Volatility vs Company</div>
          <div className="barChartParentBlock">
            <HorizontalBarChart />
          </div>
        </div>
      </Grid>
      <Grid item xs>
        <div className="gridCardLarge">
          <div className="gridCardHeaderInner">Competitor Analysis</div>
          <div className="bubbleChartParentBlock">
            <BubbleChartMain />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default IndustryVsCompany;

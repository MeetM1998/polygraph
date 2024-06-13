import React from "react";
import { Grid } from "@mui/material";
import LineChartMain from "../chart/line-chart/LineChartMain";

const UnheardTruth = () => {
  return (
    <Grid className="truth-container" container spacing={3} marginTop={1}>
      <Grid item xs>
        <div className="gridCardLarge">
          <div className="gridCardHeaderInner">The Unheard Truth</div>
          <div>
            <LineChartMain />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default UnheardTruth;

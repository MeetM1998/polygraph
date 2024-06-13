import { Grid } from "@mui/material";
import "./KeyTopics.scss";
import FrequencyChart from "../chart/wave-chart/FrequencyChart";
const KeyTopics = () => {
  return (
    <Grid container spacing={3} marginTop={1}>
      <Grid item md>
        <div className="gridCardLarge">
          <div className="gridCardHeaderInner">Key Topics discussed</div>
          <div className="gridCardSubHeaderInner">Satya Nadella: AI race</div>
          <div className="gridCardContentInner">
            <p className="paraContent">
              The key topics discussed in Microsoft's last quarterly earnings call (Q2 2023) include:
            </p>
            <p className="paraContent">
              Financial performance and outlook, cloud business performance, device execution challenges, workforce and
              cost optimization and strategic investments. Additionally, Microsoft discussed its non-GAAP financial
              measures, as well as its strategy to focus on growing its cloud business, building new products and
              services, and continuing to invest in its people, technology, and infrastructure.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item md>
        <div className="gridCardLarge">
          <div className="gridCardHeaderInner">Helios Quantitative Highlight</div>

          <div className="gridCardContentInner">
            <ul>
              <li>Our entire analysis is generated from our Comprehend AI voice engine.</li>
              <li>
                This engine has been licensed by some of the world s largest quantitative hedge funds and used in
                academic research globally.
              </li>
              <li>
                The following graphic showcases the most hesitant response from all speakers to a question. Hesitancy
                has been described as the canary in the coal mine for understanding what one is responding with. The
                spectrogram representation showcases just how much more is available from our enterprise API offering.
              </li>
              <li>Each millisecond of audio is available to our enterprise clients.</li>
            </ul>
          </div>
          <div className="waveChartParentBlock">
            <FrequencyChart />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default KeyTopics;

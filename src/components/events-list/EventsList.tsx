import { Grid } from "@mui/material";
import Cards from "../card/Cards";


const EventsList = () => {
    return (
        <>
            <Grid container spacing={3} marginTop={1}>
                <Grid item xs>
                    <Cards title="Name of Event" subTitle="Q1 2023 Quarterly Earnings Call" />
                </Grid>
                <Grid item xs>
                    <Cards title="Date of Event" subTitle="January 24th 2023" />
                </Grid>
                <Grid item xs>
                    <Cards title="Quality of Audio" action="High Quality " />
                </Grid>
                <Grid item xs>
                    <Cards title="Chief Executive Officer" subTitle="Satya Nadella" />
                </Grid>
            </Grid>
            <Grid container spacing={3} marginTop={1}>
                <Grid item xs>
                    <Cards title="Duration of Call" subTitle="53 minutes and 44 Seconds" />
                </Grid>
                <Grid item xs>
                    <Cards title="Duration of PR" subTitle="31 minutes and 12 Seconds" />
                </Grid>
                <Grid item xs>
                    <Cards title="Duration of Q&A" subTitle="22 minutes and 32 Seconds" />
                </Grid>
                <Grid item xs>
                    <Cards title="Topics" action="AI Race, Inflation" />
                </Grid>
            </Grid>
        </>
    )
};

export default EventsList;
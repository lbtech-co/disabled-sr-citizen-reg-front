import { Grid, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const years = [2074, 2075, 2076, 2078, 2079, 2080, 2081];

export default function Chart() {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          textAlign: "center",
        }}
      >
        <LineChart
          xAxis={[{ data: years, label: "years", scaleType: "point" }]}
          series={[
            {
              data: [245, 350, 382, 438, 360, 474],
            },
          ]}
          width={500}
          height={300}
        />
        <Typography>Graph of disabled persons in Koshi state</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          textAlign: "center",
        }}
      >
        <LineChart
          xAxis={[{ data: years, label: "years", scaleType: "point" }]}
          series={[
            {
              data: [245, 350, 382, 438, 360, 474],
            },
          ]}
          width={500}
          height={300}
        />
        <Typography>Graph of disabile senior citizen in Koshi state</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          textAlign: "center",
        }}
      >
        <LineChart
          xAxis={[{ data: years, label: "years", scaleType: "point" }]}
          series={[
            {
              data: [245, 350, 382, 438, 360, 474],
            },
          ]}
          width={500}
          height={300}
        />
        <Typography>
          Graph of disabile senior male citizen in Koshi state
        </Typography>
      </Grid>
    </Grid>
  );
}

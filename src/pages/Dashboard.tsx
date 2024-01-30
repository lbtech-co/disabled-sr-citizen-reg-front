import { Typography, Grid, Card } from "@mui/material";
import Icon from "../components/Icon";

function Dashboard() {
  const CARD_ITEMS = [
    { title: "Total numbers of disability", icon: "Home", id: "1" },
    { title: "Total numbers of disability", icon: "Home", id: "2" },
    { title: "Total numbers of disability", icon: "Home", id: "3" },
    { title: "Total numbers of disability", icon: "Home", id: "4" },
  ];

  return (
    <Grid container spacing={3}>
      {CARD_ITEMS.map((data) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
          <Card
            style={{
              height: "90px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Icon
              sx={{ fontSize: "40px", color: "grey.50" }}
              name={data.icon}
            />
            <Typography sx={{ width: "75%" }}>{data.title}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Dashboard;

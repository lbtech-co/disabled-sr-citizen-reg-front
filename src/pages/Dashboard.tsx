import { Typography, Grid, Card } from "@mui/material";
import Icon from "../components/Icon";

const CARD_ITEMS = [
  { title: "Total Disabilities", totalCount: 1075, icon: "Home", id: "1" },
  { title: "Male Disabilities", totalCount: 57, icon: "Home", id: "2" },
  { title: "Female Disabilities", totalCount: 32, icon: "Home", id: "3" },
  { title: "Third Gender Disabilities", totalCount: 5, icon: "Home", id: "4" },
  {
    title: "Senior Citizen Disabilities",
    totalCount: 17,
    icon: "Home",
    id: "5",
  },
  { title: "Senior Male Disabilities", totalCount: 6, icon: "Home", id: "6" },
  { title: "Senior Female Disabilities", totalCount: 5, icon: "Home", id: "7" },
  {
    title: "Senior Third Gender Disabilities",
    totalCount: 6,
    icon: "Home",
    id: "8",
  },
];

function Dashboard() {
  return (
    <Grid container spacing={2}>
      {CARD_ITEMS.map((data) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
          <Card
            style={{
              height: "90px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              borderRadius: "8px",
              background: "#0288D1",
              boxShadow: "none",
              padding: "2px 15px",
            }}
          >
            <div style={{ width: "75%", color: "white" }}>
              <Typography fontSize={"1.5rem"} lineHeight={1} fontWeight={600}>
                {data.totalCount}
              </Typography>
              <Typography fontSize={".9rem"}>{data.title}</Typography>
            </div>
            <Icon
              sx={{ fontSize: "40px", color: "white", opacity: "0.4" }}
              name={data.icon}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Dashboard;

import { Typography, Grid, Card } from "@mui/material";
import Icon from "../components/Icon";
import { DASHBOARD_CARD_ITEMS } from "../constants/constants";
import { useTranslation } from "react-i18next";
import { CSSProperties } from "react";

function Dashboard() {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      {DASHBOARD_CARD_ITEMS.map((data) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
          <Card style={cardStyle}>
            <div style={{ width: "75%", color: "white" }}>
              <Typography
                fontSize={"1.5rem"}
                lineHeight={1}
                sx={{ fontWeight: "bold" }}
              >
                {data.totalCount}
              </Typography>
              <Typography variant="body2">{t(data.title)}</Typography>
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

const cardStyle: CSSProperties = {
  height: "90px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  borderRadius: "8px",
  background: "#0288D1",
  boxShadow: "none",
  padding: "2px 15px",
};

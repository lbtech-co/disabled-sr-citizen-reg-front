import { Card, Typography, Grid } from "@mui/material";
import LOGO from "../assets/images/logo.png";
import { CSSProperties } from "react";

function DisabledPersonCard() {
  return (
    <div>
      <Card
        style={{
          padding: "16px",
          width: "550px",
          height: "350px",
          margin: "auto",
          backgroundColor: "#15HA5D",
          position: "relative",
        }}
      >
        <div style={{ display: "flex" }}>
          <img src={LOGO} height={70} width={80} alt="" />
          <div
            style={{
              margin: "0px auto",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" fontSize={18} fontWeight={600}>
              Bibek Amatya
            </Typography>
            <Typography variant="h6" fontSize={14} fontWeight={600}>
              नगर कार्यपालिकाको कार्यालय
            </Typography>
            <Typography
              variant="h6"
              fontSize={14}
              fontWeight={600}
              gutterBottom
              style={{
                backgroundColor: "white",
                borderRadius: "1rem",
                padding: "2px 16px",
              }}
            >
              पुर्न अपाङ्गताकाे परिचय-पत्र
            </Typography>
          </div>
          <div
            style={{
              height: "110px",
              width: "100px",
              border: "2px solid black",
              justifyContent: "end",
            }}
          />
        </div>

        <Grid
          container
          spacing={1}
          style={{ marginTop: "16px", position: "absolute", top: 78, left: 20 }}
        >
          <Grid item xs={12}>
            <Typography variant="body2" style={smallText}>
              प्र. प. न.: १
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" style={smallText}>
              प्र. प. प्रकार: क
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" style={smallText}>
              नाम थर: जोन डोइ
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" style={smallText}>
              ठेगाना: जिल्ला: test district, स्थानिय तह: test place, वडा नं: १
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" style={smallText}>
              जन्म मिति/उमेर: 2020-05-06/4
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" style={smallText}>
              जारि मिति: 2024-05-06/4
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" style={smallText}>
              अपाङ्गताकाे किसिम: प्रक्रितिको आधारमा: सारिरिक अपाङ्गता
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" style={smallText}>
              बाबुआमा वा संरक्षकको नाम थर: test
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" style={smallText}>
              परिचय-पत्र बाहक को हस्ताक्षर:
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          <Typography variant="body2" style={smallText}>
            यो परिचय-पत्र कसैले पाएमा नजिकैको प्रहरि चौकि वा स्थानिय तहमा
            बुझाईदिनु होला
          </Typography>
        </Grid>
      </Card>
    </div>
  );
}

export default DisabledPersonCard;

const smallText: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  lineHeight: "11px",
  letterSpacing: "0px",
};

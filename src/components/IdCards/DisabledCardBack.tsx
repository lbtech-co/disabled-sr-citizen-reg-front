import { Card, Typography, Grid } from "@mui/material";
import { CSSProperties } from "react";

function DisabledCardBack() {
  return (
    <Card style={cardStyle}>
      <Grid container spacing={1} style={gridContainerStyle}>
        <div style={fullWidthDiv}>
          <Typography variant="body2" style={halfWidthDiv}>
            ID Card No: 1
          </Typography>
          <Typography variant="body2" style={halfWidthDiv}>
            ID Card Type: A
          </Typography>
        </div>
        <div style={{ width: "100%" }}>
          <Typography variant="body2" style={textStyle}>
            Name of Id Holder: test
          </Typography>
        </div>
        <div style={{ width: "100%" }}>
          <Typography variant="body2" style={textStyle}>
            Address: District: test district, Local Level: test place, Ward No:
            1
          </Typography>
        </div>
        <div style={fullWidthDiv}>
          <Typography variant="body2" style={halfWidthDiv}>
            Date of Birth/Age: 2024-01-07/1
          </Typography>
          <Typography variant="body2" style={halfWidthDiv}>
            Citizenship No./District: 12345/test district
          </Typography>
        </div>
        <div style={fullWidthDiv}>
          <Typography variant="body2" style={oneThirdWidthDiv}>
            Issue Date: 2024-01-07
          </Typography>
          <Typography variant="body2" style={oneThirdWidthDiv}>
            Sex: Male
          </Typography>
          <Typography variant="body2" style={oneThirdWidthDiv}>
            Blood Group: A+
          </Typography>
        </div>
        <div style={fullWidthDiv}>
          <Typography variant="body2" style={oneThirdWidthDiv}>
            Types of Disablity:
          </Typography>
          <div>
            <Typography variant="body2" style={textStyle}>
              On the basis of Nature: Physical disablity
            </Typography>
            <Typography variant="body2" style={textStyle}>
              On the basis of Severity: Complete
            </Typography>
          </div>
        </div>
        <div>
          <Typography variant="body2" style={textStyle}>
            {`Father's/Mother's or Guardian Name: test`}
          </Typography>
        </div>
        <div style={fullWidthDiv}>
          <Typography variant="body2" style={halfWidthDiv}>
            Signature of ID Card Holder:
          </Typography>
          <Typography variant="body2" style={textStyle}>
            Approved By:
          </Typography>
        </div>
        <div
          style={{ display: "flex", gap: 15, width: "100%", marginTop: "10px" }}
        >
          <div style={{ width: "50%", display: "flex", gap: 10 }}>
            <div>
              <Typography variant="body2" align="center" style={textStyle}>
                Right
              </Typography>
              <div style={thumbPrintStype} />
            </div>
            <div>
              <Typography variant="body2" align="center" style={textStyle}>
                Left
              </Typography>
              <div style={thumbPrintStype} />
            </div>
          </div>
          <div style={{ margin: "1.5rem 0px", width: "100%" }}>
            <Typography
              variant="body2"
              style={{ ...textStyle, marginBottom: ".5rem" }}
            >
              SIgnature:
            </Typography>
            <Typography
              variant="body2"
              style={{ ...textStyle, marginBottom: ".5rem" }}
            >
              Name:
            </Typography>
            <Typography
              variant="body2"
              style={{ ...textStyle, marginBottom: ".5rem" }}
            >
              Designation:
            </Typography>
            <Typography
              variant="body2"
              style={{ ...textStyle, marginBottom: ".5rem" }}
            >
              Date:
            </Typography>
          </div>
        </div>
      </Grid>
      <div style={disclaimerStyle}>
        <Typography variant="body2" style={{ ...textStyle, fontSize: "11px" }}>
          यो परिचय-पत्र कसैले पाएमा नजिकैको प्रहरि चौकि वा स्थानिय तहमा
          बुझाईदिनु होला
        </Typography>
      </div>
    </Card>
  );
}

export default DisabledCardBack;

const textStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  margin: "1px",
};

const fullWidthDiv: CSSProperties = {
  display: "flex",
  width: "100%",
};

const halfWidthDiv: CSSProperties = {
  ...textStyle,
  flexBasis: "50%",
};

const oneThirdWidthDiv: CSSProperties = { ...textStyle, flexBasis: "33.3%" };

const disclaimerStyle: CSSProperties = {
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  marginBottom: "5px",
  fontSize: "11px",
};

const thumbPrintStype: CSSProperties = {
  height: "100px",
  width: "90px",
  border: "2px solid black",
};

const cardStyle: CSSProperties = {
  padding: "16px",
  width: "550px",
  height: "350px",
  margin: "auto",
  position: "relative",
};

const gridContainerStyle: CSSProperties = {
  position: "absolute",
  top: 30,
  left: 30,
  width: "100%",
};

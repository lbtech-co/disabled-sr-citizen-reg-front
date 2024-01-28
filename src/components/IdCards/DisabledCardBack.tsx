import { Card, Typography, Grid } from "@mui/material";
import { idCardStyle } from "../../constants/styles";

function DisabledCardBack() {
  return (
    <Card style={idCardStyle.card}>
      <Grid container spacing={1} style={idCardStyle.gridContainer}>
        <div style={idCardStyle.fullWidthDiv}>
          <Typography variant="body2" style={idCardStyle.halfWidthDiv}>
            ID Card No: 1
          </Typography>
          <Typography variant="body2" style={idCardStyle.halfWidthDiv}>
            ID Card Type: A
          </Typography>
        </div>
        <div style={{ width: "100%" }}>
          <Typography variant="body2" style={idCardStyle.text}>
            Name of Id Holder: test
          </Typography>
        </div>
        <div style={{ width: "100%" }}>
          <Typography variant="body2" style={idCardStyle.text}>
            Address: District: test district, Local Level: test place, Ward No:
            1
          </Typography>
        </div>
        <div style={idCardStyle.fullWidthDiv}>
          <Typography variant="body2" style={idCardStyle.halfWidthDiv}>
            Date of Birth/Age: 2024-01-07/1
          </Typography>
          <Typography variant="body2" style={idCardStyle.halfWidthDiv}>
            Citizenship No./District: 12345/test district
          </Typography>
        </div>
        <div style={idCardStyle.fullWidthDiv}>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            Issue Date: 2024-01-07
          </Typography>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            Sex: Male
          </Typography>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            Blood Group: A+
          </Typography>
        </div>
        <div style={idCardStyle.fullWidthDiv}>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            Types of Disablity:
          </Typography>
          <div>
            <Typography variant="body2" style={idCardStyle.text}>
              On the basis of Nature: Physical disablity
            </Typography>
            <Typography variant="body2" style={idCardStyle.text}>
              On the basis of Severity: Complete
            </Typography>
          </div>
        </div>
        <div>
          <Typography variant="body2" style={idCardStyle.text}>
            {`Father's/Mother's or Guardian Name: test`}
          </Typography>
        </div>
        <div style={idCardStyle.fullWidthDiv}>
          <Typography variant="body2" style={idCardStyle.halfWidthDiv}>
            Signature of ID Card Holder:
          </Typography>
        </div>
        <div
          style={{ display: "flex", gap: 15, width: "100%", marginTop: "10px" }}
        >
          <div style={{ width: "50%", display: "flex", gap: 10 }}>
            <div>
              <Typography
                variant="body2"
                align="center"
                style={idCardStyle.text}
              >
                Right
              </Typography>
              <div style={idCardStyle.thumbSpace} />
            </div>
            <div>
              <Typography
                variant="body2"
                align="center"
                style={idCardStyle.text}
              >
                Left
              </Typography>
              <div style={idCardStyle.thumbSpace} />
            </div>
          </div>
          <div style={{ margin: ".5rem 1rem 0px .5rem", width: "100%" }}>
            <Typography variant="body2" style={idCardStyle.bottomRightText}>
              Approved By:
            </Typography>
            <Typography variant="body2" style={idCardStyle.bottomRightText}>
              SIgnature:
            </Typography>
            <Typography variant="body2" style={idCardStyle.bottomRightText}>
              Name:
            </Typography>
            <Typography variant="body2" style={idCardStyle.bottomRightText}>
              Designation:
            </Typography>
            <Typography variant="body2" style={idCardStyle.bottomRightText}>
              Date:
            </Typography>
          </div>
        </div>
      </Grid>
      <div style={idCardStyle.disclaimer}>
        <Typography
          variant="body2"
          style={{ ...idCardStyle.text, fontSize: "11px" }}
        >
          If found, please return to the nearest Police Station or Local
          Authorities.
        </Typography>
      </div>
    </Card>
  );
}

export default DisabledCardBack;

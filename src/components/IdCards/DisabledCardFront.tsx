import { Card, Typography, Grid } from "@mui/material";
import LOGO from "../../assets/images/logo.png";
import { idCardStyle } from "./../../constants/styles";

function DisabledCardFront() {
  return (
    <Card
      style={{
        padding: "16px",
        width: "550px",
        height: "350px",
        margin: "auto",
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
            Disablity Card
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
        style={{
          position: "absolute",
          top: 100,
          left: 30,
          width: "100%",
        }}
      >
        <div style={{ width: "100%" }}>
          <Typography variant="body2" style={idCardStyle.text}>
            प्र. प. न.: १
          </Typography>
          <Typography variant="body2" style={idCardStyle.text}>
            प्र. प. प्रकार: क
          </Typography>
          <Typography variant="body2" style={idCardStyle.text}>
            नाम थर: जोन डोइ
          </Typography>
          <Typography variant="body2" style={idCardStyle.text}>
            ठेगाना: जिल्ला: test district, स्थानिय तह: test place, वडा नं: १
          </Typography>
        </div>
        <div style={idCardStyle.fullWidthDiv}>
          <Typography variant="body2" style={idCardStyle.halfWidthDiv}>
            जन्म मिति/उमेर: 2020-05-06/4
          </Typography>
          <Typography variant="body2" style={idCardStyle.halfWidthDiv}>
            ना. प्रा. न./जिल्ला: 124587/test district
          </Typography>
        </div>
        <div style={idCardStyle.fullWidthDiv}>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            जारि मिति: 2024-05-06/4
          </Typography>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            लिङ्ग: पुरुष
          </Typography>{" "}
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            रक्त समुह: A+
          </Typography>
        </div>

        <div style={{ width: "100%" }}>
          <Typography variant="body2" style={idCardStyle.text}>
            अपाङ्गताकाे किसिम: प्रक्रितिको आधारमा: सारिरिक अपाङ्गता
          </Typography>
          <Typography variant="body2" style={idCardStyle.text}>
            बाबुआमा वा संरक्षकको नाम थर: test
          </Typography>
        </div>
        <div style={idCardStyle.fullWidthDiv}>
          <Typography variant="body2" style={idCardStyle.halfWidthDiv}>
            परिचय-पत्र बाहक को हस्ताक्षर:
          </Typography>
          <div>
            <Typography variant="body2" style={idCardStyle.text}>
              परिचय-पत्र प्रमाणित गर्ने:
            </Typography>
            <Typography variant="body2" style={idCardStyle.text}>
              हस्ताक्षर:
            </Typography>
            <Typography variant="body2" style={idCardStyle.text}>
              नाम थर:
            </Typography>
            <Typography variant="body2" style={idCardStyle.text}>
              पद:
            </Typography>
            <Typography variant="body2" style={idCardStyle.text}>
              मिति:
            </Typography>
          </div>
        </div>
      </Grid>
      <div
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
        <Typography
          variant="body2"
          style={{ ...idCardStyle.text, fontSize: "11px" }}
        >
          यो परिचय-पत्र कसैले पाएमा नजिकैको प्रहरि चौकि वा स्थानिय तहमा
          बुझाईदिनु होला
        </Typography>
      </div>
    </Card>
  );
}

export default DisabledCardFront;

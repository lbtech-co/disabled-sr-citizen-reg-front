import { Card, Typography, Grid } from "@mui/material";
import LOGO from "../../assets/images/logo.png";
import { idCardStyle } from "./../../constants/styles";

function DisabledCardFront() {
  return (
    <Card style={idCardStyle.card}>
      <div style={idCardStyle.fullWidthDiv}>
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
        <div style={idCardStyle.photoSpace} />
      </div>

      <Grid
        container
        spacing={1}
        style={{ ...idCardStyle.gridContainer, top: 100 }}
      >
        <div>
          <Typography variant="body2" style={idCardStyle.text}>
            प्र. प. न.: १
          </Typography>
          <Typography variant="body2" style={idCardStyle.text}>
            प्र. प. प्रकार: क
          </Typography>
          <Typography variant="body2" style={idCardStyle.text}>
            नाम थर: जोन डोइ
          </Typography>
        </div>
        <div style={idCardStyle.fullWidthDiv}>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            ठेगाना: जिल्ला: test district
          </Typography>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            स्थानिय तह: test place
          </Typography>{" "}
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            वडा नं: १
          </Typography>
        </div>
        <div style={idCardStyle.fullWidthDiv}>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            जन्म मिति/उमेर: 2020-05-06/4
          </Typography>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            जिल्ला: test district
          </Typography>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            ना. प्रा. न.: 124587
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

        <div style={idCardStyle.fullWidthDiv}>
          <Typography
            variant="body2"
            style={{ ...idCardStyle.text, width: "67%" }}
          >
            अपाङ्गताकाे किसिम: प्रक्रितिको आधारमा: सारिरिक अपाङ्गता
          </Typography>
          <Typography variant="body2" style={idCardStyle.oneThirdWidthDiv}>
            गम्भिर्ता: पुर्ण
          </Typography>
        </div>
        <Typography variant="body2" style={idCardStyle.text}>
          बाबुआमा वा संरक्षकको नाम थर: test
        </Typography>
        <div style={idCardStyle.fullWidthDiv}>
          <Typography variant="body2" style={idCardStyle.halfWidthDiv}>
            परिचय-पत्र बाहक को हस्ताक्षर:
          </Typography>
          <div>
            <Typography variant="body2" style={idCardStyle.text}>
              परिचय-पत्र प्रमाणित गर्ने
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
      <div style={idCardStyle.disclaimer}>
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

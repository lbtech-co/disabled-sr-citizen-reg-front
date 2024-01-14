import { Button, Card, Typography } from "@mui/material";
import CustomInput from "./CustomInput";
import { CSSProperties } from "react";
import { colors } from "../utils/Constants";

export default function StateForm() {
  return (
    <Card sx={WrapperStyle}>
      <Typography
        variant="h5"
        bgcolor={colors.blue}
        color={colors.white}
        width="100%"
        height="55px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Create/Update States
      </Typography>
      <form style={FormStyle}>
        <CustomInput
          fullWidth
          id="english-name"
          name="english-name"
          label="English name (अंग्रेजी नाम)"
        />
        <CustomInput
          isNepali
          fullWidth
          id="nepali-name"
          name="nepali-name"
          label="Nepali name (नेपाली नाम)"
        />
        <Button
          type="submit"
          color="primary"
          sx={ButtonStyle}
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

const WrapperStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "40%",
  justifyContent: "space-between",
};
const ButtonStyle: CSSProperties = {
  width: "max-content",
  height: "45px",
  paddingInline: 10,
  marginInline: "auto",
};

const FormStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  width: "100%",
  gap: "40px",
  flex: 1,
  padding: "20px",
  boxSizing: "border-box",
};

import { Button, Card, InputLabel, TextField, Typography } from "@mui/material";
import { colors } from "../utils/Constants";
import NepaliInput from "./NepaliInput";

export default function StateForm() {
  return (
    <Card className="state-crud-card">
      <Typography variant="h5" className="state-crud-form-header">
        Create/Update States
      </Typography>
      <form className="state-crud-form">
        <InputLabel htmlFor="english-name">Nepali name (नेपाली नाम)</InputLabel>
        <TextField fullWidth id="english-name" />

        <InputLabel htmlFor="nepali-name">
          English name (अंग्रेजी नाम)
        </InputLabel>
        <NepaliInput fullWidth id="nepali-name" />
        <Button
          type="submit"
          sx={{
            backgroundColor: colors.blue,
            width: "max-content",
            height: "45px",
            paddingInline: 10,
            margin: "auto",
          }}
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

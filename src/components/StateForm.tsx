import { Button, Card, Typography } from "@mui/material";
import CustomInput from "./CustomInput";

export default function StateForm() {
  return (
    <Card className="state-crud-card">
      <Typography variant="h5" className="state-crud-form-header">
        Create/Update States
      </Typography>
      <form className="state-crud-form">
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
          sx={{
            width: "max-content",
            height: "45px",
            paddingInline: 10,
            marginInline: "auto",
          }}
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

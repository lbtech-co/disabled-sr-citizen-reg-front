import {
  Button,
  Card,
  Container,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { colors } from "../utils/Constants";
import NepaliInput from "./NepaliInput";

export default function StateForm() {
  return (
    <form style={{ display: "flex", width: "40%" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          padding: 2,
          width: "100%",
        }}
      >
        <Typography variant="h5">Create/Update States</Typography>
        <Container>
          <InputLabel htmlFor="english-name" sx={{ marginBottom: 2 }}>
            Nepali name (नेपाली नाम)
          </InputLabel>
          <TextField fullWidth id="english-name" />
        </Container>
        <Container>
          <InputLabel htmlFor="nepali-name" sx={{ marginBottom: 2 }}>
            English name (अंग्रेजी नाम)
          </InputLabel>
          <NepaliInput fullWidth id="nepali-name" />
        </Container>
        <Button
          type="submit"
          sx={{
            backgroundColor: colors.blue,
            width: "max-content",
            margin: "auto",
          }}
          variant="contained"
        >
          Submit
        </Button>
      </Card>
    </form>
  );
}

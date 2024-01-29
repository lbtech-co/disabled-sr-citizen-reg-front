import { colors } from "../constants/constants";
import CustomInput from "../components/CustomInput";
import { CSSProperties } from "react";
import {
  Paper,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
  Container,
  Stack,
} from "@mui/material";

export default function Login() {
  return (
    <Container style={ContainerStyle}>
      <Paper elevation={10} style={paperStyle}>
        <Stack padding={2} width="100%">
          <Typography variant="h5" fontWeight="Bold" color={colors.black}>
            Welcome Back
          </Typography>
          <Typography variant="body1" fontSize={15} color={colors.lightBlack}>
            Enter your details to sign in
          </Typography>
        </Stack>
        <form style={formStyle} noValidate>
          <CustomInput
            fullWidth
            label="Email or Mobile"
            id="username"
            name="userName"
          />
          <CustomInput
            fullWidth
            label="Password"
            type="password"
            id="password"
            name="password"
          />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <FormControlLabel
              control={<Checkbox name="remember" size="small" />}
              label="Remember me"
            />
            <Typography fontSize="1rem">
              <Link>Forgot Password?</Link>
            </Typography>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={submitButtonStyle}
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

const paperStyle: CSSProperties = {
  padding: 20,
  minWidth: 300,
  width: 350,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 5,
};

const formStyle: CSSProperties = {
  width: "100%",
  marginBlock: 10,
  display: "flex",
  flexDirection: "column",
  gap: 15,
  justifyContent: "center",
};

const submitButtonStyle: CSSProperties = {
  marginTop: 10,
  height: 38,
  paddingInline: 40,
  backgroundColor: colors.blue,
};

const ContainerStyle: CSSProperties = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

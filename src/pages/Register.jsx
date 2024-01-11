import { Grid, Paper, Button, Typography } from "@mui/material";
import { colors } from "../utils/Constants";
import FormInput from "../components/FormInput";

export default function Register() {
  const paperStyle = {
    padding: 20,
    minHeight: "600",
    height: "max-content",
    minWidth: 300,
    width: 350,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    backgroundColor: colors.white,
  };

  const formStyle = {
    width: "100%",
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    justifyContent: "center",
  };

  const submitButtonStyle = {
    marginTop: 10,
    height: 38,
    paddingInline: 40,
    backgroundColor: colors.blue,
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper elevation={10} style={paperStyle}>
        <div style={{ backgroundColor: colors.red, width: "100%", padding: 5 }}>
          <Typography variant="h5" fontWeight="Bold" color={colors.white}>
            Create an account
          </Typography>
          <Typography variant="body1" fontSize={12} color={colors.white}>
            Enter your details to register
          </Typography>
        </div>
        <form style={formStyle} noValidate>
          <FormInput label="Full Name" id="name" name="name" />
          <FormInput label="Email" id="email" name="email" />
          <FormInput label="Mobile" id="mobile" name="mobile" />
          <FormInput label="Password" id="password" name="password" />
          <FormInput label="Confirm Password" id="confirm" name="confirm" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={submitButtonStyle}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

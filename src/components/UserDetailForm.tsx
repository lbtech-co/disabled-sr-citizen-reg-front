import { Button, Card, Container, Grid, Typography } from "@mui/material";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { colors } from "../utils/Constants";
import { CSSProperties } from "react";

export default function UserDetailForm() {
  return (
    <Container sx={ContainerStyles}>
      <Card className="users-crud-card" sx={CardStyles}>
        <Typography
          bgcolor={colors.red}
          padding={1}
          fontSize={20}
          color={colors.white}
          marginBottom={1}
        >
          Create User
        </Typography>
        <form className="users-crud-form" style={FormStyles}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, md: 8 }}>
            <Grid item xs={2} sm={4} md={4}>
              <CustomInput
                fullWidth
                required
                label="Full Name (पुरा नाम)"
                name="name"
                id="name"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <CustomInput
                fullWidth
                required
                label="Email (इमेल)"
                name="email"
                id="email"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <CustomSelect
                fullWidth
                required
                label="Role (भूमिका)"
                name="role"
                id="name"
                type="select"
                options={[{ label: "Admin", value: "admin" }]}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <CustomInput
                fullWidth
                required
                type="mobile"
                label="Mobile (मोबाइल नम्बर)"
                name="mobile"
                id="mobile"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <CustomInput
                fullWidth
                required
                label="Password (पासवर्ड)"
                name="password"
                id="password"
                type="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            sx={ButtonStyles}
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </Card>
    </Container>
  );
}

const ContainerStyles: CSSProperties = {
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  paddingBlock: 5,
};

const CardStyles: CSSProperties = { maxWidth: 700, minWidth: 300 };
const FormStyles: CSSProperties = { padding: 10 };
const ButtonStyles: CSSProperties = { marginBlock: 2 };

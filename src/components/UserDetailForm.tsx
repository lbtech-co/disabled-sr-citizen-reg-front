import { Button, Card, Grid } from "@mui/material";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
// import "../styles/usersStyle.css";

export default function UserDetailForm() {
  return (
    <Card className="users-crud-card" sx={{ padding: 2, margin: 2 }}>
      <form className="users-crud-form">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
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
          sx={{ marginBlock: 2 }}
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

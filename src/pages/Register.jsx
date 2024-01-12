import { Grid, Paper, Button, Typography, Divider } from '@mui/material'
import { colors } from '../utils/Constants'
import FormInput from '../components/FormInput'
import Link from '@mui/material/Link'

export default function Register() {
  const paperStyle = {
    padding: 20,
    minHeight: '600',
    height: 'max-content',
    minWidth: 300,
    width: 350,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  }

  const formStyle = {
    width: '100%',
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    justifyContent: 'center',
  }

  const submitButtonStyle = {
    marginTop: 10,
    height: 38,
    paddingInline: 40,
    backgroundColor: colors.blue,
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh', backgroundColor: colors.white }}
    >
      <Paper elevation={10} style={paperStyle}>
        <div style={{ width: '100%', padding: 10 }}>
          <Typography variant="h4" fontWeight="Bold" color={colors.black}>
            Create an account
          </Typography>
          <Typography variant="body1" fontSize={13} color={colors.lightBlack}>
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
          <Divider />
        </form>

        <Typography>
          Already have an account
          <Link
            href="/login"
            color={colors.red}
            style={{ fontWeight: 500, paddingInline: 1 }}
          >
            {' '}
            Login
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

import {
  Grid,
  Paper,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
  Divider,
} from '@mui/material'
import { colors } from '../utils/Constants'
import FormInput from '../components/FormInput'

export default function Login() {
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
    marginBlock: 10,
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
        <div style={{ padding: 10, width: '100%' }}>
          <Typography variant="h4" fontWeight="Bold" color={colors.black}>
            Welcome Back
          </Typography>
          <Typography variant="body1" fontSize={13} color={colors.lightBlack}>
            Enter your details to sign in
          </Typography>
        </div>
        <form style={formStyle} noValidate>
          <FormInput label="Email or Mobile" id="username" name="username" />
          <FormInput label="Password" id="password" name="password" />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {' '}
            <FormControlLabel
              control={<Checkbox name="remember" color="warning" />}
              label="Remember me"
            />
            <Typography>
              <Link color={colors.red}>Forgot Password ?</Link>
            </Typography>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={submitButtonStyle}
          >
            Log In
          </Button>
          <Divider />
        </form>
        <Typography>
          Don&apos;t have an account
          <Link
            color={colors.red}
            style={{ fontWeight: 500, paddingInline: 1 }}
            href="/register"
          >
            {' '}
            Register
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

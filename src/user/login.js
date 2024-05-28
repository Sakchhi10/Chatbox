import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import swal from 'sweetalert';
import { useNavigate,useLocation } from 'react-router-dom';
import Swal from "sweetalert2";
import { useAuth } from "../Authcontext/AuthContext";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://sakchhichoudhary.vercel.app/">
       Sakchhi Choudhary
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const location = useLocation();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "test@example.com", // Set the static email
    password: "password", // Set the static password
  });

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform simple email and password validation
    if (userData.email === "" || userData.password === "") {
      Swal.fire("Error", "Empty Email or Password", "warning");
      return;
    }

    // Store user information in local storage
    localStorage.setItem("user", JSON.stringify(userData));

    signIn(userData);
    navigate('/'); // Redirect to the dashboard or desired page
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
              Sign in
            </Typography>
            <Typography component="h1" variant="h6">
              New to company? Sign up!
            </Typography>

            <Grid item md={12}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#B6BBC4",
                  my: 2,
                  "&:hover": {
                    backgroundColor: "#B6BBC4", 
                  },
                }}
              >
                Continue with Google
              </Button>
            </Grid>

            <Box
              component="form"
              noValidate
              
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={userData.email}
                onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={userData.password}
                onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={handleLogin}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}


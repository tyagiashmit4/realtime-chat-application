import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (!username) {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Valid email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      const userDetails = { username, email };
      localStorage.setItem("user", JSON.stringify(userDetails)); // Save username and email
      onLogin(userDetails); // Trigger the onLogin callback with user details
      console.log("Logged in as:", username);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom right, #a18cd1, #fbc2eb)",
      }}
    >
      <Box
        sx={{
          width: 350,
          padding: 3,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{
            margin: "0 auto",
            backgroundColor: "#1976d2",
            marginBottom: 2,
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!usernameError}
          helperText={usernameError}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Typography
            variant="body2"
            color="primary"
            sx={{ cursor: "pointer" }}
          >
            Forgot Password?
          </Typography>
        </Box>
        <Button
          fullWidth
          variant="contained"
          sx={{
            marginTop: 2,
            padding: 1,
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#155a9a" },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default LoginPage;

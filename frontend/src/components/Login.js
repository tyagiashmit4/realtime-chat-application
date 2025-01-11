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
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username) {
      onLogin(username); // Trigger the onLogin callback with the username
      console.log("Logged in as:", username);
    } else {
      alert("Please enter your username!");
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
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

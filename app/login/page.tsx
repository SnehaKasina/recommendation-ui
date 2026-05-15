import { Box, Button, TextField } from "@mui/material";
import React from "react";
import InputTextField from "../components/InputTextField";

const Login = () => {
  return (
    <div>
      <h1>Welcome to login page</h1>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 400,
            p: 4,
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <InputTextField label="UserName" variant="outlined" fullWidth />
          <InputTextField label="Password" variant="outlined" fullWidth />
          <Button variant="outlined">Submit</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;

import { Button, Card, Container, FormControl, TextField } from "@mui/material"
import React from "react"

function LoginPage() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl>
        <TextField
          name="email"
          label="email"
          variant="outlined"
          placeholder="email"
          required
          sx={{ mb: "0.5rem" }}
        />
        <TextField
          name="password"
          label="password"
          variant="outlined"
          placeholder="password"
          type="password"
          required
          sx={{ mb: "0.5rem" }}
        />
        <Button variant="outlined">Login</Button>
      </FormControl>
    </Container>
  )
}

export default LoginPage

import React, { useState } from "react"
import { Button, FormControl, TextField } from "@mui/material"
import axios from "axios"

import { ApiContext } from "../App"

function SignUpBox() {
  const [email, setEmail] = useState()
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <FormControl>
        <TextField
          name="email"
          type="email"
          label="email"
          variant="outlined"
          placeholder="email"
          required
          sx={{ mb: "0.5rem" }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          name="username"
          label="username"
          variant="outlined"
          placeholder="username"
          required
          sx={{ mb: "0.5rem" }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          name="password"
          type="password"
          label="password"
          variant="outlined"
          placeholder="password"
          required
          sx={{ mb: "0.5rem" }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          Create Account
        </Button>
      </FormControl>
    </div>
  )
}

export default SignUpBox

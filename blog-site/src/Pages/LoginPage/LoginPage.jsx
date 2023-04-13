import { Button, Card, Container, FormControl, TextField } from "@mui/material"
import axios from "axios"
import React, { useState, useContext } from "react"
import { ApiContext } from "../../App"
import useToken from "../../components/useToken"

import Navbar from "../../components/Navbar/Navbar"

function LoginPage() {
  const ApiHost = useContext(ApiContext)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { token, setToken } = useToken()

  const handleSubmit = async (event) => {
    event.preventDefault()
    axios.post(ApiHost + "/login/", { email, password }).then((response) => {
      setToken(response.data)
    })
  }

  return (
    <div>
      <Navbar />
      <Container
        sx={{
          display: "flex",
          height: "60vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControl>
          <TextField
            name="email"
            label="email"
            variant="outlined"
            placeholder="email"
            required
            onChange={(event) => setEmail(event.target.value)}
            sx={{ mb: "0.5rem" }}
          />
          <TextField
            name="password"
            label="password"
            variant="outlined"
            placeholder="password"
            type="password"
            required
            onChange={(event) => setPassword(event.target.value)}
            sx={{ mb: "0.5rem" }}
          />
          <Button variant="outlined" onClick={handleSubmit}>
            Login
          </Button>
        </FormControl>
      </Container>
    </div>
  )
}

export default LoginPage

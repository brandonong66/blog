import React, { useState, useContext } from "react"
import { Button, FormControl, TextField } from "@mui/material"
import axios from "axios"

import { ApiContext } from "../App"
import useToken from "../components/useToken"

function LoginBox() {
  const ApiHost = useContext(ApiContext)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { token, setToken } = useToken()
  const handleSubmit = async (event) => {
    event.preventDefault()
    axios
      .post(ApiHost + "/user/login/", { email, password })
      .then((response) => {
        console.log(response.data)
        setToken({ token: "test" })
      })
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
          onChange={(event) => setEmail(event.target.value)}
          sx={{ mb: "0.5rem" }}
        />
        <TextField
          name="password"
          type="password"
          label="password"
          variant="outlined"
          placeholder="password"
          required
          onChange={(event) => setPassword(event.target.value)}
          sx={{ mb: "0.5rem" }}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          Login
        </Button>
      </FormControl>
    </div>
  )
}

export default LoginBox

import { Typography, Box, Button } from "@mui/material"
import React from "react"
import "./LandingPage.css"

const LandingPage = ({ imageSrc }) => {
  return (
    <div className="landingPage">
      <Box className="titleBox">
        <em>
          <Typography variant="h2" sx={{ color: "white" }}>
            Brandon's BMWs
          </Typography>
        </em>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          <img
            src={require("../../assets/e30.png")}
            alt="e30"
            className="e30Icon"
          />
          <Button
            variant=""
            sx={{
              color: "white",
              ":hover": {
                boxShadow:2
              },
            }}
          >
            Enter
          </Button>
        </Box>
      </Box>
      <img src={imageSrc} alt="Background Image" className="landingPageImage" />
    </div>
  )
}

export default LandingPage

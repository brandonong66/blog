import { Typography } from "@mui/material"
import React from "react"
import "./LandingPage.css"

const LandingPage = ({ imageSrc }) => {
  return (
    <div className="landingPage">
      <img src={imageSrc} alt="Background Image" className="landingPageImage" />
      <div className="title">
        <Typography variant="h3">Welcome</Typography>
      </div>
    </div>
  )
}

export default LandingPage

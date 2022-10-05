import {
  Grid,
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Typography,
} from "@mui/material"
import React from "react"
import PostCard from "./PostCard/PostCard"
import ConstructionIcon from "@mui/icons-material/Construction"

function HomePage() {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ConstructionIcon
          sx={{
            width: "30%",
            height: "30%",
          }}
        />
      </Container>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        Coming Soon
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
        }}
      >
        Checkout the 24v swap guide or gallery instead
      </Typography>
    </div>
  )
}

export default HomePage

import {
  Grid,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material"
import React from "react"
import PostCard from "./PostCard/PostCard"
import { styled, ThemeProvider, createTheme } from "@mui/material/styles"

function HomePage() {
  return (
    <Container>
      <Grid container rowSpacing={1} maxHeight={{ xs: "25%" }}>
        <Grid item xs={12}>
          <PostCard />
        </Grid>
        <Grid item xs={12}>
          <PostCard />
        </Grid>
        <Grid item xs={12}>
          <PostCard />
        </Grid>
        <Grid item xs={12}>
          <PostCard />
        </Grid>
        <Grid item xs={12}>
          <PostCard />
        </Grid>
        <Grid item xs={12}>
          <PostCard />
        </Grid>
        <Grid item xs={12}>
          <PostCard />
        </Grid>
        <Grid item xs={12}>
          <PostCard />
        </Grid>
        <Grid item xs={12}>
          <PostCard />
        </Grid>
        
      </Grid>
    </Container>
  )
}

export default HomePage

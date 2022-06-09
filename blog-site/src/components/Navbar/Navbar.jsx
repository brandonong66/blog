import { Box, Divider, Link, Grid, Typography } from "@mui/material"
import React from "react"
// import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <Grid container sx={{ py: 2 }}>
        <Grid container xs={4}>
          <Grid item>
            <Box>
              <Typography
                variant="h6"
                noWrap={true}
              >
                Brandon's Bimmers
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end" xs={8}>
          <Grid item>
            <Link href="/" underline="none" color="inherit">
              <Typography variant="h6">Home</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/gallery" underline="none" color="inherit">
              <Typography variant="h6">Gallery</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/about" underline="none" color="inherit">
              <Typography variant="h6">About</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Divider></Divider>
    </div>
  )
}

export default Navbar

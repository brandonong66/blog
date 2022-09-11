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
            <Link href="/" underline="none" color="inherit">
              <Typography variant="h6" noWrap={true} color="text.primary">
                Brandon's Bimmers
              </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end" xs={8}>
          <Grid item>
            <Link href="/24v-swap" underline="none" color="inherit">
              <Typography variant="h6" color="text.primary">
                24V Swap
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/gallery" underline="none" color="inherit">
              <Typography variant="h6" color="text.primary">
                Gallery
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/about" underline="none" color="inherit">
              <Typography variant="h6" color="text.primary">
                About
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Divider></Divider>
    </div>
  )
}

export default Navbar

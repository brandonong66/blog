import { Box, Divider, Link, Grid, Typography } from "@mui/material"
import React from "react"
// import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar" sx={{ display: "flex" }}>
      <Grid container sx={{ py: 2 }}>
        <Grid item lg={8} md={8} sm={6} xs={6}>
          <Link href="/" underline="none" color="inherit">
            <Typography variant="h6" color="text.primary">
              Brandon's Bimmers
            </Typography>
          </Link>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <Grid
            container
            columnSpacing={2}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Grid item>
              <Link href="/24v-swap" underline="none" color="inherit">
                <Typography variant="h6" color="text.primary">
                  24V Swap
                </Typography>
              </Link>
            </Grid>
            {/* <Divider
            orientation="vertical"
            variant="middle"
            sx={{ marginX: "1rem" }}
          /> */}

            <Grid item>
              <Link href="/gallery" underline="none" color="inherit">
                <Typography variant="h6" color="text.primary">
                  Gallery
                </Typography>
              </Link>
            </Grid>
            {/* <Divider
            orientation="vertical"
            variant="middle"
            sx={{ marginX: "1rem" }}
          /> */}
            <Grid item>
              <Link href="/about" underline="none" color="inherit">
                <Typography variant="h6" color="text.primary">
                  About
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/login" underline="none" color="inherit">
                <Typography variant="h6" color="text.primary">
                  Login
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "black" }} />
    </div>
  )
}

export default Navbar

import {
  Container,
  Typography,
  Link,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material"
import Engine from "./Engine"
import Transmission from "./Transmission"
import Gearshift from "./Gearshift"
import CoolingSystem from "./CoolingSystem"
import Differential from "./Differential"
import Sources from "./Sources"
import React from "react"
import Navbar from "../../components/Navbar/Navbar"

function SwapPage() {
  return (
    <div>
      <Navbar />
      <Container
        sx={{
          pt: "1rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
          }}
        >
          24 Valve Swap Guide
        </Typography>
        <Typography variant="h4">Overview</Typography>
        <Typography variant="body1">
          So you're interested in 24 valve swapping your E30. I've put together
          this guide using many different sources as well as my personal
          experience to ensure all the info you'll need is in one place. Many
          other write ups exist out there but there is always some conflicting
          information so I will share what I've confirmed to work in my build as
          well as what others have said works.
        </Typography>
        <ol>
          <li>
            <Link href="#Engine" underline="none">
              Engine
            </Link>
          </li>
          <li>
            <Link href="#Transmission" underline="none">
              Transmission
            </Link>
          </li>
          <li>
            <Link href="#Differential" underline="none">
              Differential
            </Link>
          </li>
          <li>
            <Link href="#Cooling-System" underline="none">
              Cooling System
            </Link>
          </li>
          <li>
            <Link href="#Gearshift-Assembly" underline="none">
              Gearshift Assembly
            </Link>
          </li>
          <li>
            <Link href="#Sources" underline="none">
              Sources
            </Link>
          </li>
        </ol>
        <Engine />
        <Transmission />
        <Differential />
        <CoolingSystem />
        <Gearshift />
        <Sources />
      </Container>
    </div>
  )
}

export default SwapPage

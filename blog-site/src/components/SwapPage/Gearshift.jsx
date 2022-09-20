import React from "react"
import { Typography, Link } from "@mui/material"
function Gearshift() {
  return (
    <div>
      <Typography variant="h4" id="Gearshift-Assembly">
        Gearshift Assembly
      </Typography>
      <Typography variant="body1">
        If you have a transmission that was used with M20s, like the getrag 260,
        it will sit tilted 15 degrees to the right once bolted up to the M50{" "}
        <Link
          href="https://www.rmeuropean.com/bmw-e30-m50-swap.aspx"
          target="_blank"
        >
          [25]
        </Link>
        Since the transmission is tilted, this means the shifter will be tilted
        at an angle too. To account for this, you will need a custom shift
        selector rod too like{" "}
        <Link
          href="https://www.garagistic.com/collections/bmw-dssrs-double-shear-selector-rod-e30-e36-e46-e92-e28/products/10-degree-twist-dssr-dohc-24v-swap-e30-dssr"
          target="_blank"
        >
          this one
        </Link>{" "}
        from garagistic.
      </Typography>
    </div>
  )
}

export default Gearshift

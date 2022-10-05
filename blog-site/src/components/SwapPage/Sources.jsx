import React from "react"
import { Typography, Link } from "@mui/material"
function Sources() {
  return (
    <div>
      <Typography variant="h5" id="Sources">
        Sources
      </Typography>
      <Typography variant="body1"></Typography>
      <ol>
        <li>
          <Link
            href="https://www.r3vlimited.com/board/forum/e30-technical-forums/24v-engine-swaps/m50-52-s50-52/251081-the-poor-man-s-m50-3-0l-stroker-dyno-numbers-are-in"
            target="_blank"
          >
            RobertK - The Poor Man's M50 3.0l Stroker Dyno Numbers are in.
          </Link>
        </li>
        <li>
          <Link href="M50" target="_blank"></Link>
        </li>
      </ol>
    </div>
  )
}

export default Sources

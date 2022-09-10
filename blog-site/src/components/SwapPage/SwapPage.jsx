import { Container, Typography, Link } from "@mui/material"
import React from "react"

function SwapPage() {
  return (
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
          <Link href="#Engine" underline="none">
            Transmission
          </Link>
        </li>
        <li>
          {" "}
          <Link href="#Engine" underline="none"></Link>
        </li>
        <li>
          <Link href="#Sources" underline="none">
            Sources
          </Link>
        </li>
      </ol>
      <Typography variant="h4" id="Engine">
        Engine
      </Typography>
      <Typography variant="body1">
        24V refers to the 24 valves in the head, 12 intake and 12 exhaust. M20
        engines were 12 valve and all 6 cylinder engines after that were 24
        valve. For these swaps, the main engines commonly used are the M5X and
        S5X engines (M50, M52, M54, S50, S52, S54). This guide will go over
        swapping in stock motors but there is also the option to customize the
        engine too. For example, an M50 3.0 liter stroker using an M50 2.5 block
        with an M54 rotating assembly (crank, rods, pistons)
        <Link
          href="https://www.r3vlimited.com/board/forum/e30-technical-forums/24v-engine-swaps/m50-52-s50-52/251081-the-poor-man-s-m50-3-0l-stroker-dyno-numbers-are-in"
          target="_blank"
        >
          [1]
        </Link>
        .
        <ul>
          <li>
            M50B25 (non vanos){" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M50#M50B25"
              target="_blank"
            >
              [2]
            </Link>
            <ul>
              <li>1990-1992 E34: 525i, 525ix </li>
              <li>1991-1992 E36: 325i, 325is</li>
            </ul>
          </li>
          <li>
            M50B25TU (single vanos){" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M50#M50B25TU"
              target="_blank"
            >
              [3]
            </Link>
            <ul>
              <li>1992-1996 E34: 525i, 525ix</li>
              <li>1993-1995 E36: 325i, 325is</li>
            </ul>
          </li>
          <li>
            M52B25 (single vanos)
            <ul>
              <li>1995-1998 E36: 323i</li>
              <li>1995-1998 E39: 523</li>
            </ul>
          </li>
          <li>
            M52TUB25 (double vanos)
            <ul>
              <li>1998-2000 E46: 323i, 323Ci</li>
              <li>1998-2000 E39: 523i</li>
              <li>1998-2000 E36/7: Z3 2.3i</li>
            </ul>
          </li>
          <li>
            M52B28 (single vanos)
            <ul>
                <li>1995-1999 E36: 328i, 328is</li>
                <li>1995-1998 E39: 528i</li>
                <li>1995-1998 E38: 728i, 728iL</li>
                <li>1997-1998 E36/7: Z3 2.8</li>
            </ul>
          </li>
          <li>M52TUB28 (double vanos): </li>
          <li>M54B25</li>
          <li>M54B28</li>
          <li>M54B30</li>
        </ul>
        <br /> No m
      </Typography>
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
    </Container>
  )
}

export default SwapPage

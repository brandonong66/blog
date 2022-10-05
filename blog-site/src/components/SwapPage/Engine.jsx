import React from "react"
import {
  Typography,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Box,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Source from "./Source"

function Engine() {
  return (
    <div>
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
        <Source
          source="https://www.r3vlimited.com/board/forum/e30-technical-forums/24v-engine-swaps/m50-52-s50-52/251081-the-poor-man-s-m50-3-0l-stroker-dyno-numbers-are-in"
          sourceNumber="1"
        />
        .
        <Box sx={{ marginTop: "10px", marginBottom: "10px" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ backgroundColor: "grey.50" }}
            >
              <Typography variant="h6">Engine Options</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid
                  item
                  sm={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ul>
                    <li>
                      <b>M50B25</b> (non vanos){" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M50#M50B25"
                        sourceNumber="2"
                      />
                      <ul>
                        <li>1990-1992 E34: 525i, 525ix </li>
                        <li>1991-1992 E36: 325i, 325is</li>
                      </ul>
                    </li>
                    <li>
                      <b>M50B25TU</b> (single vanos){" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M50#M50B25TU"
                        sourceNumber="3"
                      />
                      <ul>
                        <li>1992-1996 E34: 525i, 525ix</li>
                        <li>1993-1995 E36: 325i, 325is</li>
                      </ul>
                    </li>
                    <li>
                      <b>M52B25</b> (single vanos){" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M52#M52B25"
                        sourceNumber="4"
                      />
                      <ul>
                        <li>1995-1998 E36: 323i</li>
                        <li>1995-1998 E39: 523</li>
                      </ul>
                    </li>
                    <li>
                      <b>M52TUB25</b> (double vanos){" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M52#M52TUB25"
                        sourceNumber="5"
                      />
                      <ul>
                        <li>1998-2000 E36/7: Z3 2.3i</li>
                        <li>1998-2000 E39: 523i</li>
                        <li>1998-2000 E46: 323i, 323Ci</li>
                      </ul>
                    </li>
                    <li>
                      <b>M52B28</b> (single vanos){" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M52#M52B28"
                        sourceNumber="6"
                      />
                      <ul>
                        <li>1995-1999 E36: 328i, 328is</li>
                        <li>1997-1998 E36/7: Z3 2.8</li>
                        <li>1995-1998 E38: 728i, 728iL</li>
                        <li>1995-1998 E39: 528i</li>
                      </ul>
                    </li>
                    <li>
                      <b>M52TUB28</b> (double vanos){" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M52#M52TUB28"
                        sourceNumber="7"
                      />
                      <ul>
                        <li>1998-2000 E36/7/8: Z3 2.8</li>
                        <li>1998-2000 E38: 728i</li>
                        <li>1998-2000 E39: 528i</li>
                        <li>1998-2000 E46: 328i, 328Ci</li>
                      </ul>
                    </li>
                    <li>
                      <b>M54B25</b>{" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M54#M54B25"
                        sourceNumber="8"
                      />
                      <ul>
                        <li>2000-2002 E36/7:Z3 2.5i</li>
                        <li>2000-2004 E39: 525i</li>
                        <li>2000-2006 E46: 325i, 325xi, 325Ci</li>
                        <li>2000-2004 E46/5: 325ti</li>
                        <li>2003-2005 E60/E61: 525i, 525xi</li>
                        <li>2003-2006 E83: X3 2.5i</li>
                        <li>2002-2005 E85 Z4 2.5i</li>
                      </ul>
                    </li>
                  </ul>
                </Grid>
                <Grid
                  item
                  sm={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ul>
                    <li>
                      <b>M54B30</b>{" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M54#M54B30"
                        sourceNumber="9"
                      />
                      <ul>
                        <li>2000-2006 E46: 330i, 330xi, 330Ci</li>
                        <li>2000-2004 E39: 530i</li>
                        <li>2000-2002 E36/7: Z3 3.0i</li>
                        <li>2000-2006 E53: X5 3.0i</li>
                        <li>2003-2005 E60: 530i</li>
                        <li>2002-2005 E65/E66: 730i, 730Li</li>
                        <li>2003-2006 E83: X3 3.0i</li>
                        <li>2002-2005 E85: Z4 3.0i</li>
                      </ul>
                    </li>
                    <li>
                      <b>S50B30</b> (Europe){" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M50#S50B30"
                        sourceNumber="10"
                      />
                      <ul>
                        <li>1992-1995 E36: M3</li>
                      </ul>
                    </li>
                    <li>
                      <b>S50B30US</b> (U.S./Canada){" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M50#S50B30US"
                        sourceNumber="11"
                      />
                      <ul>
                        <li>1995 E36: M3</li>
                      </ul>
                    </li>
                    <li>
                      <b>S50B32</b> (Europe){" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M50#S50B32"
                        sourceNumber="12"
                      />
                      <ul>
                        <li>1995-1998 E36: M3</li>
                        <li>1996-2000 Z3: M Coupe, M Roadster</li>
                      </ul>
                    </li>
                    <li>
                      <b>S52B32</b> (U.S./Canada){" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M52#S52"
                        sourceNumber="13"
                      />
                      <ul>
                        <li>1996-1999 E36: M3 </li>
                        <li>1998-2000 E36/7/8: Z3 M Roadster, Z3 M Coupe</li>
                      </ul>
                    </li>
                    <li>
                      <b>S54B32</b>{" "}
                      <Source
                        source="https://en.wikipedia.org/wiki/BMW_M54#S54"
                        sourceNumber="14"
                      />
                      <ul>
                        <li>2000-2006 E46: M3</li>
                        <li>2000-2002 E36/7/8: Z3 M Roadster, Z3 M Coupe</li>
                        <li>2006-2008 E85/E86: Z4 M Roadster, Z4 M Coupe</li>
                      </ul>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Typography>
      <Typography variant="h5" id="Engine-Mounting">
        Engine Mounting
      </Typography>
      <Typography variant="body1">
        For the engine arms, you can use any E36 6 cylinder engine arms P/N:{" "}
        <Link
          href="https://www.realoem.com/bmw/enUS/showparts?id=BG13-USA-05_1994_E36_BMW_328i&diagId=11_6020#11811138249"
          target="_blank"
        >
          11811138249
        </Link>{" "}
        for passenger side and{" "}
        <Link
          href="https://www.realoem.com/bmw/enUS/showparts?id=BG13-USA-05_1994_E36_BMW_328i&diagId=11_6020#11811141137"
          target="_blank"
        >
          11811141137
        </Link>{" "}
        for driver side. All of the 24v engines will have the same 6 holes used
        to mount the engine arms. Only 4 holes are used per engine arm but which
        4 of the 6 holes to use depends on the chassis the engine is going in.
        To fit in the E30, you will use the rear 4 holes. Here's a{" "}
        <Link href="https://youtu.be/LJD096swKk8?t=264" target="_blank">
          video
        </Link>{" "}
        that shows this.
        <br />
        <br />
        For the engine mounts, use the rubber oem if you want a more comfortable
        ride. You will need E28 mounts. Some say you need 535i mounts and others
        say M5 but either should fit fine. E28 motor mounts are different on the
        driver and passenger side. The driver side one is shaped like a hexagon
        and the passenger side is cylindrical. Some{" "}
        <Link
          href="https://www.r3vlimited.com/board/forum/e30-technical-forums/24v-engine-swaps/m50-52-s50-52/179241-e30-m50-swap-motor-mount"
          target="_blank"
        >
          sources
        </Link>{" "}
        say you need to use two driver side ones and{" "}
        <Link href="https://youtu.be/eqIdIgeKqwA?t=130" target="_blank">
          others
        </Link>{" "}
        say passenger side works. I was able to use two passenger side ones P/N:{" "}
        <Link
          href="https://www.realoem.com/bmw/enUS/showparts?id=DC93-USA-02-1987-E28-BMW-M5&diagId=11_0060#11811128932"
          target="_blank"
        >
          11811128932
        </Link>
        . Usually the passenger side cylindrical mounts are cheaper. The
        mounting points on the subframe have 2 holes on each side. Normally, the
        stock M20 motor mounts have the stud on the inner holes. When you
        install the E28 mounts, align the studs with the outer holes instead.
        <br />
        <br />
        You also have the option to go with an aftermarket mount, polyurethane,
        delrin, or aluminum which are all stiffer than the stock rubber mounts.
        This would be preferred if you plan on driving more aggressively like
        for track cars.
      </Typography>
    </div>
  )
}

export default Engine

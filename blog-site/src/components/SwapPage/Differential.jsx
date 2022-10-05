import React from "react"

import "./SwapPage.css"
import {
  Typography,
  Link,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  useStyles,
} from "@mui/material"
import { styled } from "@mui/system"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ImageCard from "./ImageCard"
import Source from "./Source"
import DiffTable from "./DiffTable"

const MyTableCell = styled(TableCell)({
  textAlign: "center",
})
function Differential() {
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Typography variant="h4" id="Differential">
        Differential
      </Typography>
      <Typography variant="body1">
        When picking your differential, there are multiple factors that need to
        be considered: ratio, case, and open vs lsd. This section will go over
        each one of these aspects. I have also created a tool to help you pick
        which kind of gearing you want. Below is a table of all the diff options
        that came with E30s. Note that this info may or may not be accurate so
        make sure to search online for your specific model.
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "grey.50" }}
        >
          <Typography variant="h6">E30 Diff Options</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ width: "100%", overflow: "auto" }}>
          <DiffTable />
        </AccordionDetails>
      </Accordion>
      <Typography variant="body1">
        Note: The data from this table comes from e30zone.net
        <Source
          source="https://www.e30zone.net/e30wiki/index.php/Differential"
          sourceNumber="30"
        />{" "}
        and may be inaccurate as I've been told all E30 verts have LSD. Again,
        verify your diff by the tag, part number, or spinning the input/output
        flanges and comparing the ratio.
      </Typography>
      <Typography variant="h5" sx={{ marginTop: "10px" }}>
        Ratio
      </Typography>
      <Typography variant="body1">
        The differential you pick will affect your torque, mpg, and top speed.
        The diff ratio (aka final drive ratio) is the ratio of the mating gears,
        usually expressed in decimal format. Example: A 3.25 diff meaning it
        takes 3.25 turns on the input to make 1 full rotation on the output.
        Automatics are usually paired with a higher ratio diff whereas manuals
        are usually lower ratio. 4 cylinder cars are also usually paired with a
        higher ratio diff whereas 6 cylinders are usually lower ratio.
        <ul>
          <li>
            Lower numerical value = lower ratio = taller gearing: less revs,
            less torque, higher top speed, better mpg
          </li>
          <li>
            Higher numerical value = higher ratio = shorter gearing: higher
            revs, more torque, lower top speed, worse mpg
          </li>
        </ul>
        The diff you pick depends on what your goal is with the car. If you want
        better highway cruising, choose a lower ratio diff.
      </Typography>
      <Typography variant="h5" sx={{ marginTop: "10px" }}>
        Case Size
      </Typography>
      <Typography variant="body1">
        E30 diffs are either medium or small case. This depends on the size of
        the ring gear (aka crown wheel) which can be seen in the diagram below.
        Medium case diffs have a 188mm ring gear and came on all 6 cylinder E30s
        besides 320i. Small case diffs have a 168mm ring gear and came on 4
        cylinder E30s plus the 320i 6 cylinder. In terms of case size, "they
        differ in length but not width, and therefore are interchangeable
        without changing drive shafts"{" "}
        <Source
          source="https://www.e30zone.net/e30wiki/index.php/Differential"
          sourceNumber="28"
        />
        . To do this, simply loosen the drive shaft locking nut and adjust the
        length of it.
        <ImageCard
          imageSource="https://i.imgur.com/UPazqh8.png"
          alt="Components of a Differential"
          title="Differential Diagram"
          source="https://www.carexpert.com.au/car-news/differentials-explained"
          sourceNumber="27"
        />
      </Typography>
      <Typography variant="h5" sx={{ marginTop: "10px" }}>
        Open vs LSD
      </Typography>
      <Typography variant="body1">
        Open diffs send power to the wheel with least resistance. This won't
        cause any problems during normal driving but can be an issue if one
        wheel looses traction. It also means you can't do donuts and drift so
        open diffs are boring. You'll just end up doing one wheel peels and look
        goofy. If you don't plan on getting sideways with your car an open diff
        is fine but an lsd will always be more fun.
        <br />
        <br />
        LSD stands for limited slip differential. There are multiple different
        kinds of mechanisms used to achieve limited slip. For E30 diffs, there
        are mechanical LSDs (uses clutch packs) and viscous (uses viscous
        coupling, similar to torque converters in automatic transmissions). LSDs
        came standard on the M3, iX, and sport models (is, es) where iX models
        had viscous and all others used clutch packs{" "}
        <Source
          source="https://www.bimmerforums.com/forum/showthread.php?1711307-E30-factory-LSD"
          sourceNumber="29"
        />
        . For other models, an LSD could be optioned. To find out if yours is an
        LSD, lift up the rear of the car and turn one wheel by hand. If the
        other side spins the same direction, it is an LSD. If it spins the
        opposite direction, it is an open diff. Another way to check is by using
        a vin decoder like{" "}
        <Link href="https://bimmer.work/" target="_blank">
          this one
        </Link>
        . Make sure to physically check it though because a previous owner may
        have swapped the diff in your E30.
      </Typography>
      <Typography variant="h5" sx={{ marginTop: "10px" }}>
        Swapping Internals
      </Typography>
      <Typography variant="h5" sx={{ marginTop: "10px" }}>
        Gear Ratio Calculator
      </Typography>
    </Box>
  )
}

export default Differential

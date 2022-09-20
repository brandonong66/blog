import React from "react"
import {
  Typography,
  Link,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material"
import ImageCard from "./ImageCard"
import Source from "./Source"

function Differential() {
  const styles = (theme) => ({})
  return (
    <div>
      <Typography variant="h4" id="Differential">
        Differential
      </Typography>
      <Typography variant="body1">
        When picking your differential, there are multiple factors that need to
        be considered: ratio, case, and open vs lsd. This section will go over
        each one of these aspects. I have also created a tool to help you pick
        which kind of gearing you want.
      </Typography>
      <Typography variant="h5">Ratio</Typography>
      <Typography variant="body1">
        The differential you pick will affect your torque, mpg, and top speed.
        The diff ratio (aka final drive ratio) is the ratio of the mating gears,
        usually expressed in decimal format. Example: A 3.25 diff meaning it
        takes 3.25 turns on the input to make 1 full rotation on the output.
        <ul>
          <li>
            Lower numerical value = taller gearing: less revs, less torque,
            higher top speed, better mpg
          </li>
          <li>
            Higher numerical value = shorter gearing: higher revs, more torque,
            lower top speed, worse mpg
          </li>
        </ul>
        The diff you pick depends on what your goal is with the car. If you want
        better highway cruising, choose a lower ratio diff
      </Typography>
      <Typography variant="h5">Case Size</Typography>
      <Typography variant="body1">
        E30 diffs are either medium or small case. This depends on the size of
        the ring gear (aka crown wheel) which can be seen in the diagram below.
        Medium case diffs have a 188mm ring gear and came on all 6 cylinder E30s
        besides 320i. Small case diffs have a 168mm ring gear and came on 4
        cylinder E30s plus the 320i 6 cylinder. In terms of case size, "they differ in length but not
        width, and therefore are interchangeable without changing drive shafts"{" "}
        <Source
          source="https://www.e30zone.net/e30wiki/index.php/Differential"
          sourceNumber="28"
        />
        . To do this, simply loosen the drive shaft locking nut and adjust the length of it.
        <ImageCard
          imageSource="https://i.imgur.com/UPazqh8.png"
          alt="Components of a Differential"
          title="Differential Diagram"
          source="https://www.carexpert.com.au/car-news/differentials-explained"
          sourceNumber="27"
        />
      </Typography>
      <Typography variant="h5">Open vs LSD</Typography>
      <Typography variant="h5">Swapping Internals</Typography>
      <Typography variant="h5">Gear Ratio Calculator</Typography>
    </div>
  )
}

export default Differential

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
          <Link href="#Transmission" underline="none">
            Transmission
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
            <b>M50B25</b> (non vanos){" "}
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
            <b>M50B25TU</b> (single vanos){" "}
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
            <b>M52B25</b> (single vanos){" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M52#M52B25"
              target="_blank"
            >
              [4]
            </Link>
            <ul>
              <li>1995-1998 E36: 323i</li>
              <li>1995-1998 E39: 523</li>
            </ul>
          </li>
          <li>
            <b>M52B25TU</b> (double vanos){" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M50#M50B25TU"
              target="_blank"
            >
              [5]
            </Link>
            <ul>
              <li>1998-2000 E36/7: Z3 2.3i</li>
              <li>1998-2000 E39: 523i</li>
              <li>1998-2000 E46: 323i, 323Ci</li>
            </ul>
          </li>
          <li>
            <b>M52B28</b> (single vanos){" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M52#M52B28"
              target="_blank"
            >
              [6]
            </Link>
            <ul>
              <li>1995-1999 E36: 328i, 328is</li>
              <li>1997-1998 E36/7: Z3 2.8</li>
              <li>1995-1998 E38: 728i, 728iL</li>
              <li>1995-1998 E39: 528i</li>
            </ul>
          </li>
          <li>
            <b>M52TUB28</b> (double vanos){" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M52#M52TUB28"
              target="_blank"
            >
              [7]
            </Link>
            <ul>
              <li>1998-2000 E36/7/8: Z3 2.8</li>
              <li>1998-2000 E38: 728i</li>
              <li>1998-2000 E39: 528i</li>
              <li>1998-2000 E46: 328i, 328Ci</li>
            </ul>
          </li>
          <li>
            <b>M54B25</b>{" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M54#M54B25"
              target="_blank"
            >
              [8]
            </Link>
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
          <li>
            <b>M54B30</b>{" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M54#M54B30"
              target="_blank"
            >
              [9]
            </Link>
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
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M50#S50B30"
              target="_blank"
            >
              [10]
            </Link>
            <ul>
              <li>1992-1995 E36: M3</li>
            </ul>
          </li>
          <li>
            <b>S50B30US</b> (U.S./Canada){" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M50#S50B30US"
              target="_blank"
            >
              [11]
            </Link>
            <ul>
              <li>1995 E36: M3</li>
            </ul>
          </li>
          <li>
            <b>S50B32</b> (Europe){" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M50#S50B32"
              target="_blank"
            >
              [12]
            </Link>
            <ul>
              <li>1995-1998 E36: M3</li>
              <li>1996-2000 Z3: M Coupe, M Roadster</li>
            </ul>
          </li>
          <li>
            <b>S52B32</b> (U.S./Canada){" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M52#S52"
              target="_blank"
            >
              [13]
            </Link>
            <ul>
              <li>1996-1999 E36: M3 </li>
              <li>1998-2000 E36/7/8: Z3 M Roadster, Z3 M Coupe</li>
            </ul>
          </li>
          <li>
            <b>S54B32</b>{" "}
            <Link
              href="https://en.wikipedia.org/wiki/BMW_M54#S54"
              target="_blank"
            >
              [14]
            </Link>
            <ul>
              <li>2000-2006 E46: M3</li>
              <li>2000-2002 E36/7/8: Z3 M Roadster, Z3 M Coupe</li>
              <li>2006-2008 E85/E86: Z4 M Roadster, Z4 M Coupe</li>
            </ul>
          </li>
        </ul>
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
      <Typography variant="h4" id="Transmission">
        Transmission
      </Typography>
      <Typography variant="body1">
        For the transmission, you have many choices to pick from but the most
        commonly used ones are the Getrag S5D 250G or ZF S5D 320z from e36s.
        Transmissions have a manufacturer name and different name that BMW
        refers to. For example, the "ZF S5-31" is called "S5D 310Z" by BMW. The
        S5D 320Z is an updated version of the 310Z with minor changes including
        +10Nm rating, black plug covers for shift springs, and supposedly
        different fluids but they should be interchangable{" "}
        <Link
          href="https://www.r3vlimited.com/board/forum/e30-technical-forums/24v-engine-swaps/275972-zf310-and-zf320-differences"
          target="_blank"
        >
          [21]
        </Link>
        . I believe the 310Z was used before 1996 and 320Z was used after that
        (Unconfirmed). They also have their own variants like the 320Z-THCH,
        320Z-THMW, 320Z-THDY, etc with minor changes.{" "}
        <Link
          href="https://www.bimmerforums.com/forum/showthread.php?2361293-ZF-Tranny-320Z-THCH-versus-320Z-THMW"
          target="_blank"
        >
          [22]
        </Link>{" "}
        Since they're all practically the same, I'll be referring to them as the
        ZF 5 speed
        <br />
        <br />
        Below is a table on decoding transmission names{" "}
        <Link
          href="https://en.wikipedia.org/wiki/ZF_S5-31_transmission"
          target="_blank"
        >
          [20]
        </Link>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Transmission Name</TableCell>
                <TableCell>Definition</TableCell>
                <TableCell>Options</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>S</TableCell>
                <TableCell>Transmission Type</TableCell>
                <TableCell>S=Manual, A=Auto</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>Number of forward gears</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>D</TableCell>
                <TableCell>Type of top gear</TableCell>
                <TableCell>D=Direct, S=Overdrive</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>310</TableCell>
                <TableCell>Max input torque (Nm)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Z</TableCell>
                <TableCell>Manufacturer</TableCell>
                <TableCell>Z=ZF, G=Getrag, R=GM</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <ul>
          <li>
            Getrag S5D 250G
            <ul>
              <li>
                E36: 320i, 323i, 325i, 325is{" "}
                <Link
                  href="https://www.realoem.com/bmw/enUS/partxref?id=BF73-USA-11-1997-E36-BMW-323i&mg=23&sg=05&diagId=23_1264&q=23001434410&series=E36"
                  target="_blank"
                >
                  [15]
                </Link>
              </li>
              <li>
                E46: 320i, 320Ci, 323i, 323Ci, 325i, 325Ci, 325ti{" "}
                <Link
                  href="https://www.realoem.com/bmw/enUS/partxref?id=BF73-USA-11-1997-E36-BMW-323i&mg=23&sg=05&diagId=23_1264&q=23001434410&series=E46"
                  target="_blank"
                >
                  [16]
                </Link>
              </li>
              <li>
                E34: 520i, 525i (1992-1995){" "}
                <Link
                  href="https://www.realoem.com/bmw/enUS/partxref?id=BF73-USA-11-1997-E36-BMW-323i&mg=23&sg=05&diagId=23_1264&q=23001434410&series=E34"
                  target="_blank"
                >
                  [17]
                </Link>
              </li>
              <li>
                E39: 520i, 523i, 525i{" "}
                <Link
                  href="https://www.realoem.com/bmw/enUS/partxref?id=BF73-USA-11-1997-E36-BMW-323i&mg=23&sg=05&diagId=23_1264&q=23001434410&series=E39"
                  target="_blank"
                >
                  [18]
                </Link>
              </li>
              <li>
                E36/7 Z3: 2.0, 2.2i, 2.5, 2.5i{" "}
                <Link
                  href="https://www.realoem.com/bmw/enUS/partxref?id=BF73-USA-11-1997-E36-BMW-323i&mg=23&sg=05&diagId=23_1264&q=23001434410&series=Z3"
                  target="_blank"
                >
                  [19]
                </Link>
              </li>
            </ul>
          </li>
          <li>ZF S5D 310Z</li>
          <ul>
            <li>
              1991-1992 (up to 7/92) E34: 525i{" "}
              <Link
                href="https://www.bimmerforums.com/forum/showthread.php?1928544-E34-Manual-Transmission-Replacement"
                target="_blank"
              >
                [24]
              </Link>
            </li>
            <li>
              1994-1995 E34: 530i (this version has a different bell housing
              that fits the V8 engine. Not compatible with this swap)
            </li>
          </ul>
          <li>Getrag 260/5</li>
          <ul>
            <li>
              1989-1990 E34: 525i (M20){" "}
              <Link
                href="https://www.bimmerforums.com/forum/showthread.php?1928544-E34-Manual-Transmission-Replacement"
                target="_blank"
              >
                [24]
              </Link>
            </li>
            <li>
              E30: 325i Sport{" "}
              <Link
                href="https://www.e30zone.net/e30wiki/index.php/Drivetrain"
                target="_blank"
              >
                [23]
              </Link>
            </li>
            <li>E28</li>
          </ul>
          <li>Getrag 260</li>
          <ul>
            <li>
              E30: 323i, 324td, 325e, 325i, 325iX{" "}
              <Link
                href="https://www.e30zone.net/e30wiki/index.php/Drivetrain"
                target="_blank"
              >
                [23]
              </Link>
            </li>
          </ul>
        </ul>
        <Typography variant="h5">Transmission Mounting</Typography>
        If you have a transmission that was used with M20s, like the getrag 260,
        it will sit tilted 15 degrees to the right once bolted up to the M50{" "}
        <Link
          href="https://www.rmeuropean.com/bmw-e30-m50-swap.aspx"
          target="_blank"
        >
          [25]
        </Link>
        . This means you will have to use a custom transmission crossmember to
        account for the angle like{" "}
        <Link
          href="https://www.garagistic.com/products/getrag-260-e30-transmission-brace"
          target="_blank"
        >
          this one
        </Link>{" "}
        from garagistic.
        <br />
        <br />
        If you used any of the other transmissions, which came factory with the
        24v engines, you will need the stock E30 manual transmission crossmember
        P/N:{" "}
        <Link
          href="https://www.realoem.com/bmw/enUS/showparts?id=BB13-USA-10_1986_E30_BMW_325i&diagId=23_0380#23711176574"
          target="_blank"
        >
          23711176574
        </Link>
        <br />
        <br />
        For the transmission mounts, you can use mounts from any small-6 (non
        m30) manuals (ZF 5mt, ZF 6mt, G260 5mt, M3 6mt){" "}
        <Link
          href="https://www.r3vlimited.com/board/forum/e30-technical-forums/24v-engine-swaps/m50-52-s50-52/199264-what-trans-mounts-for-my-m50nv-zf-swap"
          target="_blank"
        >
          [26]
        </Link>
        . In my E30, I have a ZF 320Z from an E36 328/M3 and I used the stock
        mounts that came with it P/N:{" "}
        <Link
          href="https://www.realoem.com/bmw/enUS/showparts?id=BG13-USA-05_1994_E36_BMW_328i&diagId=23_1266#22316799331"
          target="_blank"
        >
          22316799331
        </Link>
        . You can also choose to go with an aftermarket polyurethane, delrin, or
        solid aluminum mounts but this will increase vibration. I chose the
        stock ones for more comfort.
      </Typography>
      <Typography variant="h4" id="Cooling-System">
        Cooling System
      </Typography>
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

import React from "react"
import {
  Typography,
  Link,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material"
function Transmission() {
  return (
    <div>
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
    </div>
  )
}

export default Transmission

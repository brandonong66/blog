import React from "react"
import { Link } from "@mui/material"
function Source(props) {
  return (
    <Link href={props.source} target="_blank">
      [{props.sourceNumber}]
    </Link>
  )
}

export default Source

import React from "react"
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material"
import Source from "./Source"
function ImageCard(props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "10px"}}>
      <Card>
        <CardMedia
          component="img"
          src={props.imageSource}
          alt={props.alt}
          sx={{
            maxHeight: "30vh",
          }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6">
            {props.title}{" "}
            <Source source={props.source} sourceNumber={props.sourceNumber} />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ImageCard

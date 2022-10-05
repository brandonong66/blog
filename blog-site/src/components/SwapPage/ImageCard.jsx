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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Card
        sx={{
          width: {
            xs: "80%",
            sm: "80%",
            md: "50%",
            lg: "50%",
            xl: "50%",
          },
        }}
      >
        <CardMedia
          component="img"
          src={props.imageSource}
          alt={props.alt}
          sx={
            {
              // maxHeight: "30vh",
            }
          }
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

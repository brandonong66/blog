import React from "react"
import { Box } from "@mui/material"

const cont = {
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
}

const SelectedImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
}) => {
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100
  const sy = (100 - (30 / photo.height) * 100) / 100

  if (direction === "column") {
    cont.position = "absolute"
    cont.left = left
    cont.top = top
  }

  return (
      <Box
        sx={{
          transition: "transform 0.2s ease-in-out",
          "&:hover": { boxShadow: 10, transform: "scale(1.05)", zIndex: 1 },
        }}
      >
        <div
          style={{ margin, height: photo.height, width: photo.width, ...cont }}
        >
          <img alt={photo.title} {...photo} />
        </div>
      </Box>
  )
}
export default SelectedImage

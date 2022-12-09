import { Container } from "@mui/material"
import React from "react"
import ImageGrid from "./ImageGrid/"
function GalleryPage() {
  return (
    <Container sx={{
      pt: "1rem"
    }}>
      <ImageGrid />
    </Container>
  )
}

export default GalleryPage

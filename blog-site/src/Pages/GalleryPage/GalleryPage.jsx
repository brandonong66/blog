import { Container } from "@mui/material"
import React from "react"
import ImageGrid from "./ImageGrid/"
import Navbar from "../../components/Navbar/Navbar"

function GalleryPage() {
  return (
    <div>
      <Navbar />
      <Container
        sx={{
          pt: "1rem",
        }}
      >
        <ImageGrid />
      </Container>
    </div>
  )
}

export default GalleryPage

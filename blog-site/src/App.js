import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Typography, Container, makeStyles, Box } from "@mui/material"

import "./App.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import Navbar from "./components/Navbar"

import AboutPage from "./components/AboutPage"
import GalleryPage from "./components/GalleryPage"
import HomePage from "./components/HomePage"
import LandingPage from "./components/LandingPage"

import LandingPageImage from "./assets/E36-4-0.jpg"

import { styled, ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#7381bd",
      light: "#bcc4e0",
      dark: "#4c5575",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
    },
    background: {
      default: "#121212",
      paper: "#3b3b3b",
    },
  },
})



function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box
            sx={{
              bgcolor: "background.default",
            }}
          >
            <Container>
              <Navbar />
            </Container>
            {/* <LandingPage imageSrc={LandingPageImage} /> */}
            <Routes>
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

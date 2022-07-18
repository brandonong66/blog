import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container, Box } from "@mui/material"
import { SmoothProvider } from 'react-smooth-scrolling'

import "./App.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import Navbar from "./components/Navbar"

import AboutPage from "./components/AboutPage"
import GalleryPage from "./components/GalleryPage"
import HomePage from "./components/HomePage"

import { ThemeProvider, createTheme } from "@mui/material/styles"
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
      paper: "#202020",
    },
  },
})



function App() {
  return (
    <div>
      <BrowserRouter>
      <SmoothProvider skew={true} >
        {/* <ThemeProvider theme={darkTheme}> */}
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
        {/* </ThemeProvider> */}
        </SmoothProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

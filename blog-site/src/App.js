import React, { createContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container, Box } from "@mui/material"

import "./App.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import Navbar from "./components/Navbar/Navbar"
import AboutPage from "./Pages/AboutPage"
import GalleryPage from "./Pages/GalleryPage/GalleryPage"
import HomePage from "./Pages/HomePage/HomePage"
import SwapPage from "./Pages/SwapPage"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import PostPage from "./Pages/PostPage/PostPage"
import { SmoothProvider } from "react-smooth-scrolling"
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

export const ApiContext = createContext()
function App() {
  const apiHost = process.env.REACT_APP_API_HOST
  return (
    <div>
      <ApiContext.Provider value={apiHost}>
        <BrowserRouter>
          <SmoothProvider skew={false}>
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
                <Route path="/post" element={<PostPage />} />
                <Route path="/24v-swap" element={<SwapPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </Box>
            {/* </ThemeProvider> */}
          </SmoothProvider>
        </BrowserRouter>
      </ApiContext.Provider>
    </div>
  )
}

export default App

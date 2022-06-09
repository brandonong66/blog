import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Typography, Container, makeStyles } from "@mui/material"

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
function App() {
  return (
    <BrowserRouter>
      <div>
        <Container>
          <Navbar />
        </Container>
        {/* <LandingPage imageSrc={LandingPageImage} /> */}
        <Routes>
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

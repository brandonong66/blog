import React from "react"
import { SampleImages } from "../GalleryPage/SampleImages"
import { Box, Typography, Container, Link } from "@mui/material"
import Navbar from "../../components/Navbar/Navbar"

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Container
        sx={{
          mt: "5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={SampleImages[9]}
            alt="image"
            sx={{
              maxWidth: "40%",
              mr: "1rem",
              objectFit: "cover",
              boxShadow: "20",
            }}
          />
          <Box
            sx={{
              position: "relative",
              backgroundColor: "white",
              width: "30vw",
              left: "-50px",
              top: "50px",
              boxShadow: "20",
              padding: "1rem",
            }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: "center", pt: "1rem", pb: "3rem" }}
            >
              About Me
            </Typography>
            <Typography variant="body1" align="justify">
              Hi, I'm Brandon Ong, a 21 year old from the Bay Area with a
              passion for cars. I got into cars when I was 15 by discovering car
              videos on youtube, specifically E30 related videos. Ever since
              then, I've been in love with BMWs and my dream is to own an M3
              collection one day. I enjoy working on cars because taking things
              apart and learning how different mechanisms and designs work
              really fascinates me. Everything I know about cars I learned from
              the internet, from replacing parts to the physics of engine
              internals.
              <br />
              <br />
              Cars are just a hobby for me, something to do on the side. I'm
              currently studying computer science at SJSU to become a web
              developer, and this personal blog is a little project for me to
              bring together my two focuses: cars and coding.
              <br />
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "5rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5rem"
                width="1.5rem"
                viewBox="0 0 672 672"
              >
                <g fill="#100f0d">
                  <path d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959" />
                  <path d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308" />
                </g>
              </svg>
              <Link
                href="https://www.instagram.com/bimmerboybong/"
                target="_blank"
                underline="none"
                color="black"
              >
                <Typography variant="h7" sx={{ ml: "5px" }}>
                  @bimmerboybong
                </Typography>
              </Link>
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  )
}

export default AboutPage

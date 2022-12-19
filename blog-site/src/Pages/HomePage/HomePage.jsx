import { Container, Button, ButtonGroup, Box } from "@mui/material"
import React, { useState, useEffect } from "react"
import PostCard from "./PostCard"
import axios from "axios"
import { SyncLoader } from "react-spinners"
import NewPostBox from "./NewPostBox"
const POSTSPERPAGE = 4

const pageButtonCalculator = (currentPage, postCount) => {
  const pageNumbers = []
  if (currentPage == 1) {
    pageNumbers[0] = 1
    pageNumbers[1] = 2
    pageNumbers[2] = 3
  } else if (currentPage == Math.ceil(postCount / POSTSPERPAGE)) {
    pageNumbers[0] = Math.ceil(postCount / POSTSPERPAGE) - 2
    pageNumbers[1] = Math.ceil(postCount / POSTSPERPAGE) - 1
    pageNumbers[2] = Math.ceil(postCount / POSTSPERPAGE)
  } else {
    pageNumbers[0] = currentPage - 1
    pageNumbers[1] = currentPage
    pageNumbers[2] = currentPage + 1
  }
  return pageNumbers
}

function HomePage() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [postCount, setPostCount] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:5001/posts/").then((response) => {
      setPosts(response.data)
      setLoading(false)
    })
    axios.get("http://localhost:5001/posts/count").then((response) => {
      setPostCount(response.data.count)
    })
  }, [])

  return (
    <div>
      {isLoading && (
        <SyncLoader style={{ position: "absolute", top: "50%", left: "50%" }} />
      )}
      {!isLoading && (
        <Container sx={{ pb: "2rem" }}>
          <NewPostBox />
          {posts
            .slice((page - 1) * POSTSPERPAGE, page * POSTSPERPAGE)
            .map((post) => (
              <PostCard
                title={post.title}
                body={post.body.slice(0, 50)}
                key={post._id}
                post={post}
              />
            ))}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {POSTSPERPAGE < postCount && postCount <= 3 * POSTSPERPAGE && (
              <ButtonGroup variant="outlined">
                <Button
                  variant={page == 1 ? "contained" : "outlined"}
                  onClick={() => {
                    setPage(1)
                  }}
                >
                  1
                </Button>
                <Button
                  variant={page == 2 ? "contained" : "outlined"}
                  onClick={() => {
                    setPage(2)
                  }}
                >
                  2
                </Button>
                {POSTSPERPAGE * 2 < postCount && (
                  <Button
                    variant={page == 3 ? "contained" : "outlined"}
                    onClick={() => {
                      setPage(3)
                    }}
                  >
                    3
                  </Button>
                )}
              </ButtonGroup>
            )}
            {POSTSPERPAGE * 3 < postCount && (
              <ButtonGroup variant="outlined">
                <Button onClick={() => setPage(1)}>&lt;&lt;</Button>
                <Button
                  variant={page == 1 ? "contained" : "outlined"}
                  onClick={() => {
                    if (page > 1) {
                      setPage(page - 1)
                    }
                  }}
                >
                  {pageButtonCalculator(page, postCount)[0]}
                </Button>
                <Button
                  variant={
                    page == 1
                      ? "outlined"
                      : page == pageButtonCalculator(page, postCount)[2]
                      ? "outlined"
                      : "contained"
                  }
                  onClick={() => {
                    if (page == 1) {
                      setPage(2)
                    } else if (
                      page == pageButtonCalculator(page, postCount)[2]
                    ) {
                      setPage(page - 1)
                    }
                  }}
                >
                  {pageButtonCalculator(page, postCount)[1]}
                </Button>
                <Button
                  variant={
                    page == pageButtonCalculator(page, postCount)[2]
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() => {
                    if (page == 1) {
                      setPage(3)
                    } else if (
                      page == pageButtonCalculator(page, postCount)[2]
                    ) {
                    } else {
                      setPage(page + 1)
                    }
                  }}
                >
                  {pageButtonCalculator(page, postCount)[2]}
                </Button>
                <Button
                  onClick={() => {
                    setPage(Math.ceil(postCount / POSTSPERPAGE))
                  }}
                >
                  &gt;&gt;
                </Button>
              </ButtonGroup>
            )}{" "}
          </Box>
        </Container>
      )}
    </div>
  )
}

export default HomePage

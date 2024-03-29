import React, { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import {
  Button,
  Box,
  Container,
  Grid,
  FormControl,
  TextField,
  Typography,
} from "@mui/material"
import axios from "axios"
import { ApiContext } from "../../App"
import ReactHtmlParser from "react-html-parser"
import "./PostPage.css"
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles"

const sanitizeHtml = require("sanitize-html")

let theme = createTheme()
theme = responsiveFontSizes(theme)

function PostPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get("id")
  const [post, setPost] = useState()
  const ApiHost = useContext(ApiContext)
  const [editPost, setEditPost] = useState(false)

  useEffect(() => {
    axios.get(`${ApiHost}/posts/${id}`).then((response) => {
      setPost(response.data)
    })
  }, [])

  const handleChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.put(ApiHost + "/posts/" + post.id, post).then((response) => {
      console.log(response)
      window.location.reload(false)
    })
  }
  //ISO to readable date formatter
  const formatDate = (dateStr) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const date = new Date(dateStr)
    const month = months[date.getMonth()]

    return month + " " + date.getDate() + ", " + date.getFullYear()
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {editPost && post && (
          <Container>
            <Box
              sx={{
                mt: "1rem",
                mb: "3rem",
              }}
            >
              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Grid item xs={12} sm={12} md={8}>
                  <FormControl sx={{ width: "100%" }}>
                    <TextField
                      name="title"
                      label="title"
                      variant="outlined"
                      value={post.title}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      name="body"
                      label="content"
                      variant="outlined"
                      multiline
                      rows="20"
                      fullWidth
                      sx={{ my: "0.5rem", resize: "vertical" }}
                      value={post.body}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      name="tags"
                      label="tags"
                      variant="outlined"
                      placeholder="tags separated by spaces"
                      sx={{ mb: "0.5rem" }}
                      value={post.tags}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      name="image"
                      label="image"
                      variant="outlined"
                      placeholder="https://i.imgur.com/asdf1234.jpeg"
                      value={post.image}
                      onChange={handleChange}
                    />
                    <Box sx={{ display: "flex", justifyContent: "right" }}>
                      <Button
                        variant="outlined"
                        onClick={() => setEditPost(false)}
                        sx={{ marginRight: "0.5rem" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        variant="outlined"
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </Box>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          </Container>
        )}
        {!editPost && (
          <Button
            variant="outlined"
            sx={{ marginTop: "0.5em" }}
            onClick={() => setEditPost(true)}
          >
            Edit
          </Button>
        )}
        {post && (
          <div>
            <Typography variant="h2">{post.title}</Typography>
            <Typography variant="subtitle1">
              Tags: {post.tags.join(", ")}
            </Typography>

            <Typography variant="subtitle1">
              Updated: {formatDate(post.modifiedDate)}
            </Typography>
            <br />
            <Typography
              variant="body"
              sx={
                {
                  whiteSpace: "pre-line",
                }
              }
            >
              {ReactHtmlParser(
                sanitizeHtml(post.body, {
                  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                    "img",
                  ]),
                })
              )}
              {/* {post.body} */}
            </Typography>
          </div>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default PostPage

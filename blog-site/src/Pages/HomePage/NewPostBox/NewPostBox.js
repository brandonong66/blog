import { Button, FormControl, TextField, Box, Grid } from "@mui/material"
import { flexbox } from "@mui/system"
import React, { useState, useEffect } from "react"
import axios from "axios"

function NewPostBox() {
  const [newPost, setNewPost] = useState(false)
  const [newPostData, setNewPostData] = useState({
    title: "",
    body: "",
    tags: "",
  })
  const [validForm, setValidForm] = useState(false)

  useEffect(() => {
    if (
      newPostData.title != "" &&
      newPostData.body != "" &&
      newPostData.tags != ""
    ) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }, [newPostData])

  const handleChange = (event) => {
    setNewPostData({
      ...newPostData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const postData = {
      title: newPostData.title,
      body: newPostData.body,
      tags: newPostData.tags.split(" "),
    }
    console.log(JSON.stringify(postData))
    axios.post("http://localhost:5001/posts/", postData).then((response) => {
      console.log(response.status)
      setNewPostData({
        title: "",
        body: "",
        tags: "",
      })
    })
  }

  return (
    <div>
      {!newPost && (
        <div
          style={{
            display: "flex",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            justifyContent: "right",
          }}
        >
          <Button variant="outlined" onClick={() => setNewPost(true)}>
            New Post
          </Button>
        </div>
      )}
      {newPost && (
        <Box
          sx={{
            mt: "1rem",
            mb: "3rem",
          }}
        >
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={8}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  name="title"
                  label="title"
                  variant="outlined"
                  value={newPostData.title}
                  onChange={handleChange}
                  required
                />
                <TextField
                  name="body"
                  label="content"
                  variant="outlined"
                  multiline
                  rows="5"
                  fullWidth
                  sx={{ my: "0.5rem" }}
                  value={newPostData.body}
                  onChange={handleChange}
                  required
                />
                <TextField
                  name="tags"
                  label="tags"
                  variant="outlined"
                  placeholder="tags separated by spaces"
                  sx={{ mb: "0.5rem" }}
                  value={newPostData.tags}
                  onChange={handleChange}
                  required
                />
                <Box sx={{ display: "flex", justifyContent: "right" }}>
                  <Button variant="outlined" onClick={() => setNewPost(false)}>
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={handleSubmit}
                    disabled={!validForm}
                  >
                    Submit
                  </Button>
                </Box>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  )
}

export default NewPostBox

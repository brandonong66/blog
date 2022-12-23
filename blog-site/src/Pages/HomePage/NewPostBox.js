import { Button, FormControl, TextField, Box, Grid } from "@mui/material"
import { flexbox } from "@mui/system"
import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { ApiContext } from "../../App"

function NewPostBox() {
  const ApiHost = useContext(ApiContext)

  const [newPost, setNewPost] = useState(false)
  const [newPostData, setNewPostData] = useState({
    title: "",
    body: "",
    tags: "",
    image: "",
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
    console.log(newPostData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const postData = {
      title: newPostData.title,
      body: newPostData.body,
      tags: newPostData.tags.split(" "),
      image: newPostData.image,
    }
    axios.post(ApiHost + "/posts/", postData).then((response) => {
      console.log(response.data)
      setNewPostData({
        title: "",
        body: "",
        tags: "",
        image: "",
      })
      window.location.reload(false)
    })
  }

  return (
    <div>
      {!newPost && (
        <div
          style={{
            display: "flex",
            marginTop: "0.5em",
            parginBottom: "0.5em",
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

                <TextField
                  name="image"
                  label="image"
                  variant="outlined"
                  placeholder="https://i.imgur.com/asdf1234.jpeg"
                  value={newPostData.image}
                  onChange={handleChange}
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

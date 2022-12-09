import React, { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Container } from "@mui/material"
import axios from "axios"
import { ApiContext } from "../App"

function PostPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get("id")
  const [post, setPost] = useState()
  const apiHost = useContext(ApiContext)

  useEffect(() => {
    axios.get(`${apiHost}/posts/${id}`).then((response) => {
      setPost(response.data)
    })
  }, [])
  return (
    <Container>
      {" "}
      {post && (
        <div>
          <h1 style={{ textAlign: "center" }}>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </Container>
  )
}

export default PostPage

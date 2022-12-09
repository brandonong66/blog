import React from "react"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
// import { sizing } from "@mui/system"
import pic from "../../../assets/E36-4-0.jpg"

function PostCard({ post }) {
  return (
    <Card
      className="card"
      sx={{
        transition: "transform 0.2s ease-in-out",
        "&:hover": { boxShadow: 15, transform: "scale(1.05)" },
        borderRadius: "0",
        my: "1rem",
      }}
    >
      {" "}
      <CardActionArea href={"/post?id=" + post.id}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            component="img"
            src={pic}
            alt="post image"
            sx={{
              maxWidth: "30%",
              objectFit: "cover",
            }}
          />
          <CardContent>
            <Typography variant="h3">{post.title}</Typography>
            <Typography variant="body1">{post.body}</Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default PostCard

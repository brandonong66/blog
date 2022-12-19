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
import pic from "../../assets/E36-4-0.jpg"

function PostCard({ post }) {
  return (
    <Card
      className="card"
      sx={{
        // transition: "transform 0.2s ease-in-out",
        "&:hover": { backgroundImage: `url("${post.image}")` },
        borderRadius: "0",
        // my: "1rem",
        borderBottom: "1px solid grey",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <CardActionArea href={"/post?id=" + post.id}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255,255,255,0.80)",
          }}
        >
          {post.image && post.image != "" && (
            <Box
              component="img"
              src={post.image}
              alt={post.image}
              sx={{
                width: "20%",
                objectFit: "cover",
                height: "150px",
                padding: "0.5em",
              }}
            />
          )}

          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body2">
              {post.body.slice(0, 500) + "..."}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default PostCard

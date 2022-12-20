import React from "react"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
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
        borderBottom: "1px solid grey",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "200px",
      }}
    >
      <CardActionArea href={"/post?id=" + post.id}>
        <Grid
          container
          sx={{
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255,255,255,0.80)",

            padding: "0.5em",
          }}
        >
          {/* {post.image && post.image != "" && (
            <Grid item lg={2} md={2} sm={2} xs={2}>
              <img
                src={post.image}
                alt={post.image}
                style={{
                  width: "100%",
                  minHeight: "100%",
                  objectFit: "cover",
                  overflow: "hidden",
                }}
              />
            </Grid>
          )} */}
          <Grid
            item
            // lg={10} md={10} sm={10} xs={10}
          >
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>
              <Typography variant="body2">
                {post.body.slice(0, 500) + "..."}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )
}

export default PostCard

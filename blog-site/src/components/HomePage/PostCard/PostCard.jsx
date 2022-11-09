import React from "react"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
// import { sizing } from "@mui/system"
import pic from "../../../assets/E36-4-0.jpg"

function PostCard(props) {
  return (
    <Card
      className="card"
      sx={{
        transition: "transform 0.2s ease-in-out",
        "&:hover": { boxShadow: 15, transform: "scale(1.05)" },
        borderRadius: "0",
        my: "1rem"
      }}
    >
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
          <Typography variant="h3">{props.title}</Typography>
          <Typography variant="body1">{props.body}</Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default PostCard

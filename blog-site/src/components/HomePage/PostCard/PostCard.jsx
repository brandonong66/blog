import React from "react"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
// import { sizing } from "@mui/system"
import pic from "../../../assets/E36-4-0.jpg"
import "./PostCard.css"

function PostCard() {
  return (
    <Card className="card"
      sx={{
        "&:hover": { boxShadow: 15 },
        borderRadius: "0",
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
          <Typography variant="h3">Title</Typography>
          <Typography variant="body1">
            This is the main text body of the post. The quick brown fox jumped
            over the lazy dogs. The quick brown fox jumped over the lazy dogs.
          </Typography>
        </CardContent>
      </Box>
    </Card>

    // <Box sx={{ height: "10%" }}>
    //   <Card>

    //     <CardMedia component="img" image={pic} alt="post image" height="100" />
    //     <CardContent>
    //       <Typography variant="h3">Title</Typography>
    //       <Typography variant="body1">
    //         This is the main text body of the post
    //       </Typography>
    //     </CardContent>
    //   </Card>
    // </Box>
  )
}

export default PostCard

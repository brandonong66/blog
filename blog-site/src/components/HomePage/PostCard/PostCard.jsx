import React from "react"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
// import { sizing } from "@mui/system"
import pic from "../../../assets/E36-4-0.jpg"

function PostCard() {
  // const[data, setData] = useState(null)
  // const [isLoading, setIsLoading] = useState(false)
  // const getData = async => {
  //   await Axios.get("https://").then((res) => {
  //     setData(res.data)
  //     setIsLoading(true)
  //   })
  // }
  //https://www.youtube.com/watch?v=5N4Pxv1BIio


  return (
    <Card
      className="card"
      sx={{
        transition: "transform 0.2s ease-in-out",
        "&:hover": { boxShadow: 15,
        transform: "scale(1.05)" },
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
  )
}

export default PostCard

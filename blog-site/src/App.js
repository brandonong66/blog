import "./App.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { Typography } from "@mui/material"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Typography variant="h1">Hello world</Typography>
      <Navbar />
    </div>
  )
}

export default App

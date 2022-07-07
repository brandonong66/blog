import React, { Component } from "react"
import Gallery from "react-photo-gallery"
import { SampleImages } from "../SampleImages"
import SelectedImage from "./SelectedImage"

export default class ImageGrid2 extends Component {
  constructor(props) {
    super(props)
    this.state = { currentImage: null, slideshowIsOpen: null }
  }
  openSlideshow() {
    this.setState({})
  }
  render() {
    const photos = [
      {
        src: SampleImages[0],
        width: 6,
        height: 4,
      },
      {
        src: SampleImages[1],
        width: 4,
        height: 6,
      },
      {
        src: SampleImages[2],
        width: 4,
        height: 5,
      },
      {
        src: SampleImages[3],
        width: 3,
        height: 2,
      },
      {
        src: SampleImages[4],
        width: 6,
        height: 4,
      },
      {
        src: SampleImages[5],
        width: 4,
        height: 3,
      },
      {
        src: SampleImages[6],
        width: 4,
        height: 3,
      },
      {
        src: SampleImages[7],
        width: 4,
        height: 3,
      },
    ]
    const imageRender = ({ index, left, top, key, photo }) => (
      <SelectedImage
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    )
    return (
      <Gallery
        photos={photos}
        renderImage={imageRender}
      />
    )
  }
}

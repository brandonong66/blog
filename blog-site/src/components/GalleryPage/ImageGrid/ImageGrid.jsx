import React, { useState, useCallback, createContext, useContext } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

import SelectedImage from "./SelectedImage"
import { SampleImages } from "../SampleImages"

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
// const photo = photos.map((data) => {
//     return {
//       src: data.urls.regular,
//       width: data.width,
//       height: data.height,
//       class:
//         'hover:brightness-110',
//     }
//   })

function ImageGrid() {
  const [currentImage, setCurrentImage] = useState(0)
  const [slideshowIsOpen, setSlideshowIsOpen] = useState(false)

  const openSlideshow = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setSlideshowIsOpen(true)
    console.log("test")
  }, [])
  const closeSlideshow = () => {
    setCurrentImage(0)
    setSlideshowIsOpen(false)
  }
  const imageRender = ({ index, left, top, key, photo }) => (
      <SelectedImage
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
        onClick={openSlideshow}
      />
  )
  return (
    <div>
      <Gallery
        photos={photos}
        // renderImage={imageRender}
        onClick={openSlideshow}
      />
      <ModalGateway>
        {slideshowIsOpen ? (
          <Modal onClose={closeSlideshow}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default ImageGrid

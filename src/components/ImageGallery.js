import React, { useState } from 'react'
import './ImageGallery.css'
import * as MdIcons from 'react-icons/md'
import { Container, Row } from 'react-bootstrap'

const ImageGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  //  ****************************
  //  HANDLE MODAL
  //  ****************************
  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  //  ****************************
  //  IMAGINE ANTERIOARA DIN MODAL
  //  ****************************
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  //  ****************************
  //  INCHIDEREA MODALULUI
  //  ****************************
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  //  ****************************
  //  IMAGINEA URMATOARE DIN MODAL
  //  ****************************
  const nextSlide = () => {
    slideNumber === galleryImages.length - 1
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>
      {/* ********************
                MODAL
      ******************** */}
      {openModal && (
        <Container className="sliderWrap">
          <Row className="text-center">
            <div>{galleryImages[slideNumber].descriere}</div>
            <img src={galleryImages[slideNumber].src} alt="imagine modal" />
          </Row>

          <div className="slider">
            <MdIcons.MdSkipPrevious className="btnPrev" onClick={prevSlide} />
            <MdIcons.MdOutlineClose
              className="btnClose"
              onClick={handleCloseModal}
            />
            <MdIcons.MdSkipNext className="btnNext" onClick={nextSlide} />
          </div>
        </Container>
      )}

      {/* ********************
          GALERIE IMAGINI
      ******************** */}
      <div className="galleryWrap">
        {galleryImages.map((item, index) => {
          return (
            <div
              className="single"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <div className="mb-2">{item.descriere}</div>
              <img src={item.src} alt="imagine galerie" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery

import React from 'react'
import { Container } from 'react-bootstrap'
import './DetaliiCard.css'
import { useParams } from 'react-router-dom'
import ImageGallery from './ImageGallery'

const DetaliiCard = ({ date_cipri }) => {
  const { path } = useParams()

  const detaliiCard = date_cipri.find((item) => {
    return item.path === `${path}`
  })

  return (
    <>
      {detaliiCard && (
        <Container className="wrap-container ">
          <Container className="descriere">
            <div className="titlu_categorie">
              -{detaliiCard.titlu_categorie}-
            </div>
            <div className="titlu_subcategorie">{detaliiCard.subcategorie}</div>
            <div className="text">
              {detaliiCard.beneficiar && (
                <div>Beneficiar : {detaliiCard.beneficiar}</div>
              )}
              {detaliiCard.locatie && <div>Locație: {detaliiCard.locatie}</div>}
            </div>
          </Container>
          <ImageGallery galleryImages={detaliiCard.galleryImages} />
        </Container>
      )}
    </>
  )
}

export default DetaliiCard

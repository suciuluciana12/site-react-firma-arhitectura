//Componenta pt fiecare intrare in meniu :rezidential,industrial,etc
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SingleCard from './SingleCard'
import './Componenta.css'
import HeaderComponenta from './HeaderComponenta'

const Componenta = ({ categorie, titlu_categorie }) => {
  const listaCarduri = categorie.map((item) => {
    return (
      <Col key={item.id}>
        <SingleCard item={item} />
      </Col>
    )
  })

  return (
    <>
      <Container fluid className="compWrap ">
        <HeaderComponenta titlu_categorie={titlu_categorie} />
        <Container className="galleryWrapper">
          <Container className="cardsContainer">
            <Row xs="auto" className="justify-content-center">
              {listaCarduri}
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default Componenta

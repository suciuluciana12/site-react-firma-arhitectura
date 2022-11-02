import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SingleCard.css'

const SingleCard = ({ item }) => {
  return (
    <Card className="singleCard">
      <Card.Img
        className="cardImage hover-shadow"
        variant="top"
        src={item.thumbnail}
      />
      <Card.Body>
        <Card.Title className="cardTitle">{item.subcategorie}</Card.Title>
        <Link to={`/${item.categorie}/${item.path}`} className="cardLink">
          Detalii
        </Link>
      </Card.Body>
    </Card>
  )
}

export default SingleCard

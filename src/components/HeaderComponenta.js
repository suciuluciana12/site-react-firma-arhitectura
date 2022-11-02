import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './HeaderComponenta.css'
import Card from 'react-bootstrap/Card'
import { SidebarData } from './SidebarData'
import MediaQuery from 'react-responsive'

const HeaderComponenta = ({ titlu_categorie }) => {
  const sidebarDataComponenta = SidebarData.find((item) => {
    return item.title === titlu_categorie
  })
  return (
    <Container fluid>
      <Row className=" row-img ">
        <MediaQuery maxWidth={600}>
          <img src={sidebarDataComponenta.imagine_componenta.xs} />
        </MediaQuery>
        <MediaQuery minWidth={600} maxWidth={800}>
          <img src={sidebarDataComponenta.imagine_componenta.sm} />
        </MediaQuery>
        <MediaQuery minWidth={800} maxWidth={1200}>
          <img src={sidebarDataComponenta.imagine_componenta.md} />
        </MediaQuery>
        <MediaQuery minWidth={1200}>
          <img src={sidebarDataComponenta.imagine_componenta.lg} />
        </MediaQuery>
        <Row className="justify-content-center">
          <Card className="card-componenta ">
            <Card.Body>
              <Card.Title className="fw-bold p-2">
                {sidebarDataComponenta.description_card.title}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted p-2">
                {sidebarDataComponenta.description_card.subtitle}
              </Card.Subtitle>

              <Card.Text className="p-2">
                {sidebarDataComponenta.description_card.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Row>
    </Container>
  )
}

export default HeaderComponenta

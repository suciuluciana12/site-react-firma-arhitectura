import React from 'react'
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import * as AiIcons from 'react-icons/ai'

const mapStyle = {
  style: 'border:0',
  allowfullscreen: '',
  loading: 'lazy',
  referrerpolicy: 'no-referrer-when-downgrade',
}

const Home = () => {
  return (
    <div className="home">
      <Container fluid>
        <Row className="justify-content-center">
          <img
            src="/images/logo/3.jpg"
            style={{ width: '385px', height: '182px' }}
          />
        </Row>
      </Container>

      {/*------------ // Sectiunea Cu ce ne ocupam  ---------------*/}

      <Container>
        <Row
          className="w-50  mx-auto mt-5 fs-4 justify-content-center"
          xs="auto"
        >
          <Col>C U </Col>
          <Col>C E </Col>
          <Col> N E </Col>
          <Col> O C U P Ă M</Col>
        </Row>
        <Container flui="md">
          <Row className="mt-5  justify-content-center ">
            <Card className="home-card">
              <Card.Img
                variant="top"
                src="images/home-cards/home-card1.webp"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Arhitectură generală</Card.Title>
                <Card.Text>
                  Concepem proiecte de arhitectura personalizate sau iti oferim
                  mai multe variante din care poti alege, pentru a obtine exact
                  proiectul pe care il visezi.
                </Card.Text>
                <Card.Text>
                  Asiguram atat proiectul de arhitectura, cel de structura sau
                  instalatii, cat si orice alt studiu necesar.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="home-card">
              <Card.Img
                variant="top"
                src="images/home-cards/home-card2.jpg"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Design de interior</Card.Title>
                <Card.Text>
                  Complementar oricarui proiect de arhitectura este design-ul de
                  interior, pe care il gandim din faza de proiectare si il
                  finisam ulterior in etapa de interior.
                </Card.Text>
                <Card.Text>
                  Aditional proiectului, asiguram si consultare la achizitia
                  materialelor si a obiectelor de mobilier, iluminat, sanitare
                  etc.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="home-card">
              <Card.Img
                variant="top"
                src="images/home-cards/home-card3.jpg"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Consultare imobiliara</Card.Title>
                <Card.Text>
                  Iti venim in ajutor la achizitionarea terenului, cat si a
                  constructiilor existente, pentru a face cea mai buna alegere
                  si pentru a evita greselile costisitoare.
                </Card.Text>
                <Card.Text>
                  Specialistii nostrii vor evalua proprietatea dorita si vor
                  evidentia avantajele si dezavantajele in amanunt.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Container>
      <Container>
        <Container className="contact">
          <Row>
            <div className="date">
              <div className="subtitlu">
                <img src="images/logo/3-1.jpg" />
                <div className="textSubtitlu">Date de Contact :</div>
              </div>
              <div>
                <div className="mt-2">
                  Adresa : Cluj-Napoca, str.13 Septembrie nr.5, et.1, ap.5
                </div>
                <div className="mt-2">
                  <AiIcons.AiOutlinePhone className="me-1 " />
                  Telefon/fax: 0264-550333
                </div>
                <div className="mt-2">
                  <AiIcons.AiOutlinePhone className="me-1 " />
                  Telefon mobil: 0723-769462
                </div>
                <div className="mt-2">
                  <AiIcons.AiOutlineMail className="me-1 " />
                  Email : arhsimonciprian@gmail.com
                </div>
              </div>
            </div>
            <div className="date">
              <div className="subtitlu">
                <img src="images/logo/3-1.jpg" />
                <div className="textSubtitlu">Date fiscale :</div>
              </div>
              <div className="mt-2">Birou de Arhitectură Şimon Ciprian SRL</div>
              <div className="mt-2">
                Jud Cluj, Com. Baciu, Sat Popești, nr 148i
              </div>
              <div className="mt-2">J12/6846/2017</div>
              <div>CUI 38624605</div>
              <div className="mt-2">C.I.: CJ 339141</div>
              <div className="mt-2">
                Cont: RO50 BTRL RONC RT04 2827 8201 Banca Transilvania CJ
              </div>
            </div>
          </Row>
          <Row className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.456441375593!2d23.59781231623632!3d46.77560965300163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c21cd1a79b5%3A0x667a6cf1ddef2fc!2sStrada%2013%20Septembrie%205%2C%20Cluj-Napoca%20400000!5e0!3m2!1sro!2sro!4v1652704060859!5m2!1sro!2sro"
              style={mapStyle}
            ></iframe>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Home

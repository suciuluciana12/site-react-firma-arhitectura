import React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap'
import ImageGallery from './ImageGallery'

const WrapCertificari = styled.div`
  margin-top: 80px;
  width: 100%;
`

const TextContainer = styled(Container)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 30px;
  padding: 30px;
  background-color: white;
  margin-bottom: 30px;
`

const Certificari = ({ date_cipri }) => {
  const pozeCertificari = date_cipri.find((item) => {
    return item.titlu_categorie === 'Certificări'
  })
  console.log(pozeCertificari)
  return (
    <WrapCertificari>
      <Container>
        <Container fluid>
          <Row className="justify-content-center">
            <img
              src="/images/logo/3.jpg"
              style={{ width: '385px', height: '182px' }}
            />
          </Row>
        </Container>

        <TextContainer>
          <div className="p-3">
            <h5>
              <span>INFORMAŢII PERSONALE:</span>
            </h5>
            <div>
              <div>Nume: Şimon Ciprian</div>
              <div>
                Adresa: Cluj-Napoca, str. Jean-Jacques Rousseau nr. 5 ap. 16
              </div>
              <div>
                Telefon: mobil 0723-769462; birou 0264-550333; acasă:
                0264-586724
              </div>
              <div>Naţionalitate: română</div>
              <div>Data naşterii: 8 iulie 1977</div>
              <div>Locul naşterii: loc. Crasna. Jud. Sălaj</div>
            </div>
          </div>

          <div className="p-3">
            <h5>
              <span>EXPERIENŢA PROFESIONALĂ:</span>
            </h5>
            <div className="mb-3">
              <div>Perioada: octombrie 2010 până în prezent</div>
              <div>
                Numele angajatorului: ŞIMON CIPRIAN – Birou Individual de
                Arhitectură
              </div>
              <div>Funcţia ocupată: arhitect</div>
              <div>
                Tipul activităţii: proiectare de arhitectură şi urbanism –
                concepţie, elaborare, evaluare şi avizare proiecte, coordonare
                colectiv de proiectare
              </div>
            </div>
            <div>
              <div>Perioada: septembrie 2001 – octombrie 2010</div>
              <div>
                Numele angajatorului: S.C. Proiect Constrex Consulting S.R.L.
                Cluj-Napoca
              </div>
              <div>Funcţia ocupată: arhitect</div>
              <div>
                Tipul activităţii: proiectare de arhitectură şi urbanism –
                concepţie, elaborare, evaluare şi avizare proiecte, coordonare
                colectiv de proiectare
              </div>
            </div>
          </div>

          <div className="p-3">
            <h5>
              <span>EDUCAŢIE ŞI FORMARE:</span>
            </h5>
            <div>
              <div className="mb-3">
                <div>Perioada: octombrie 1995 – iunie 2001</div>
                <div>Calificare / Diplomă: Diplomă de Arhitect</div>
                <div>Domeniul studiat: Arhitectură şi Urbanism</div>
                <div>
                  Instituţia de învăţământ: Universitatea Tehnică din
                  Cluj-Napoca, Facultatea de Arhitectură şi Urbanism
                </div>
              </div>
              <div className="mb-3">
                <div>Perioada: februarie – iulie 2000</div>
                <div>
                  Calificare / Diplomă: studii arhitectură, bursă Erasmus
                </div>
                <div>Domeniul studiat: Arhitectură şi Urbanism</div>
                <div>
                  Instituţia de învăţământ: Ecole d’Architecture de Grenoble –
                  Franţa
                </div>
              </div>
              <div className="mb-3">
                <div>Perioada: octombrie 2001 – ianuarie 2002</div>
                <div>Calificare / Diplomă: studii urbanism</div>
                <div>Domeniul studiat: Urbanism şi Amenajarea Teritoriului</div>
                <div>
                  Instituţia de învăţământ: Institut d’Urbanisme de Grenoble –
                  Franţa, secţia Urbanisme et Amenagement
                </div>
              </div>
              <div>
                <div>Perioada: septembrie 1991 – iunie 1995</div>
                <div>Calificare / Diplomă: Diplomă de Bacalaureat</div>
                <div>Domeniul studiat: secţia Informatică</div>
                <div>
                  Instituţia de învăţământ: Liceul Teoretic Zalău – Sălaj
                </div>
              </div>
            </div>
          </div>

          <div className="p-3">
            <h5>
              <span>ACTIVITĂŢI PE PARCURSUL STUDIILOR:</span>
            </h5>
            <div>
              <div className="mb-3">
                <div>Perioada: iunie 1996</div>
                <div>
                  Activitatea: studii arhitecturale asupra centrului istoric a
                  două oraşe
                </div>
                <div>Domeniul: arhitectură</div>
                <div>Organizator: Facultatea de Arhitectură din Budapesta</div>
              </div>
              <div className="mb-3">
                <div>Perioada: iulie 1997</div>
                <div>
                  Activitatea: relevee de arhitectură ale unor clădiri –
                  monumente istorice
                </div>
                <div>Domeniul: arhitectură</div>
                <div>
                  Organizator: Facultatea de Arhitectură din Budapesta şi
                  Primăria Tapolca
                </div>
              </div>
              <div>
                <div>Perioada: iulie-august 1999</div>
                <div>
                  Activitatea: proiect de restaurare a Cetăţii Şimleul Silvaniei
                  jud. Sălaj
                </div>
                <div>Domeniul: arhitectură</div>
                <div>
                  Organizator: Facultatea de Arhitectură Cluj-Napoca; Facultatea
                  de Arhitectură din Hamburg
                </div>
              </div>
            </div>
          </div>

          <div className="p-3">
            <h5>
              <span>APTITUDINI ŞI COMPETENŢE PERSONALE:</span>
            </h5>
            <div className="mb-3">
              <div className="fw-bold">Limba maternă:</div> română
            </div>
            <div className="mb-3">
              <div className="fw-bold">Limbi străine:</div>
              <ul>
                <li>engleză: citit, scris, vorbit – bine</li>
                <li>franceză: citit, scris, vorbit – foarte bine</li>
              </ul>
            </div>
            <div className="mb-3">
              <div className="fw-bold">Aptitudini organizatorice:</div>
              <ul>
                <li>
                  coordonare echipă de proiectare în calitate de şef de proiect
                  şi coordonare subproiectanţi(instalaţii, drumuri, devize)
                </li>
                <li>îndrumare şi coordonare arhitecţi stagiari</li>
                <li>gestionare buget de proiectare generală</li>
                <li>
                  evaluare şi examinare iniţială proiecte în vederea autorizării
                </li>
              </ul>
            </div>
            <div>
              <div className="fw-bold">Aptitudini tehnice:</div>
              <ul>
                <li>
                  10 ani de experienţă în proiectare de arhitectură şi urbanism,
                  inclusiv proiecte realizate şi aprobate pe fonduri europene
                </li>
                <li>
                  membru al Ordinului Arhitecţilor din România din anul 2002
                </li>
                <li>
                  membru al Registrului Urbaniştilor din România din anul 2007
                  (certificat RUR categoria D şi E – PUZ, PUD, PUG)
                </li>
              </ul>
            </div>
          </div>
          <Container>
            <ImageGallery galleryImages={pozeCertificari.galleryImages} />
          </Container>
        </TextContainer>
      </Container>
    </WrapCertificari>
  )
}

export default Certificari

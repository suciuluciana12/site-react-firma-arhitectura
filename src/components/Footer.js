import React from 'react'
import * as AiIcons from 'react-icons/ai'
import styled from 'styled-components'

const FooterWrap = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.6);
  background-color: #eceeee;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 80%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-between;
  }
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    margin-right: 20px;
  }
  @media (min-width: 1200px) {
    margin-right: 100px;
  }
`
const ContactContainer = styled.div`
  padding: 10px;
  @media (min-width: 768px) {
    margin-left: 20px;
  }
  @media (min-width: 1200px) {
    margin-left: 100px;
  }
`
const stil = {
  logoImage: {
    height: '50px',
    width: '151px',
  },
}

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContent>
        <LogoContainer md="auto">
          <img src="/images/logo/2.png" style={stil.logoImage} />
          <div className="ms-2">
            <h6>
              <span>Arhitect </span>
            </h6>
            <div className="ms-2 fw-bold">Ciprian Șimon </div>
            <div className="ms-5 text-danger">& Echipa</div>
          </div>
        </LogoContainer>

        <ContactContainer md="auto">
          <div>
            <div className="mt-2  d-flex  align-items-center">
              <AiIcons.AiOutlinePhone className="me-1 " />
              <div className="fw-bold">Telefon/fax:</div> 0264-550333
            </div>
            <div className="mt-2 d-flex  align-items-center">
              <AiIcons.AiOutlinePhone className="me-1 " />
              <div className="fw-bold">Telefon mobil:</div> 0723-769462
            </div>
            <div className="mt-2  d-flex  align-items-center">
              <AiIcons.AiOutlineMail className="me-1 " />
              <div className="fw-bold">Email :</div>
              arhsimonciprian@gmail.com
            </div>
          </div>
        </ContactContainer>
      </FooterContent>
    </FooterWrap>
  )
}

export default Footer

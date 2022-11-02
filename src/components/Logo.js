import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const LogoName = styled.div`
  font-size: 1.8rem;
  color: #e95c2e;
  margin-left: 20px;
  text-align: center;

  @media (max-width: 550px) {
    margin-left: 5px;
  }
`

const Div = styled(NavLink)`
  width: 150px;
  display: flex;
  margin-left: 40px;
  align-items: center;
  text-decoration: none;

  @media (max-width: 550px) {
    margin-left: 5px;
  }
`
const stil = {
  logoImage: {
    height: '50px',
    width: '151px',
  },
}
const Logo = () => {
  return (
    <>
      <Div to="/">
        <img src="/images/logo/2.png" style={stil.logoImage} />
        <LogoName>
          <div className="d-flex ">
            <div className="me-2">B</div>
            <div className="me-2">A</div>
            <div className="me-2">S</div>
            <div className="me-2">C</div>
          </div>
          <div style={{ fontSize: '18px', color: '#fbcc70' }}>HOMES</div>
        </LogoName>
      </Div>
    </>
  )
}

export default Logo

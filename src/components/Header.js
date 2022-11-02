import React, { useState } from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import SideNav from './SideNav'

import { IconContext } from 'react-icons'

const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.85);
`
const HamburgerIcon = styled(NavLink)`
  position: absolute;
  right: 20px;
  font-size: 2em;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
`
const Header = () => {
  const [sideNav, setSideNav] = useState(false)
  const showSideNav = () => {
    setSideNav(!sideNav)
  }
  return (
    <div className="fixed-top">
      <IconContext.Provider value={{ color: '#fbcc70' }}>
        <HeaderWrap>
          <Logo />
          <HamburgerIcon to="#">
            <FaIcons.FaBars onClick={showSideNav} />
          </HamburgerIcon>
        </HeaderWrap>
        {sideNav && <SideNav showSideNav={showSideNav} />}
      </IconContext.Provider>
    </div>
  )
}

export default Header

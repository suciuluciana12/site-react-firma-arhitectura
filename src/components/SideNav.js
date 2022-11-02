import React from 'react'
import styled from 'styled-components'
import { SidebarData } from './SidebarData'
import * as AiIcons from 'react-icons/ai'
import SideMenuLink from './SideMenuLink'

const FullPageWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`

const SideWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 200px;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0px;
`

const Sidebar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`
const NavIconClose = styled.div`
  font-size: 2em;
  color: white;
  margin-top: 20px;
  margin-left: 5px;
`
const SideNav = ({ showSideNav }) => {
  return (
    <FullPageWrap>
      <SideWrap>
        <Sidebar>
          <NavIconClose to="#" onClick={showSideNav}>
            <AiIcons.AiOutlineClose />
          </NavIconClose>
          {SidebarData.map((item, index) => {
            return (
              <SideMenuLink
                key={index}
                item={item}
                showSideNav={showSideNav}
                onClick={showSideNav}
              />
            )
          })}
        </Sidebar>
      </SideWrap>
    </FullPageWrap>
  )
}

export default SideNav

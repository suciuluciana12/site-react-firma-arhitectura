import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLabel = styled(NavLink)`
  color: #b58822;
  text-decoration: none;
  font-size: 18px;
  margin-left: 10px;

  &:hover {
    color: #e95c2e;
    cursor: pointer;
  }
  &.active {
    color: #e95c2e;
  }
`
const Div = styled.div`
  padding: 10px;
`
const SideMenuLink = ({ item, showSideNav }) => {
  return (
    <Div>
      {item.icon}
      <SidebarLabel to={item.path} onClick={showSideNav}>
        {item.title}
      </SidebarLabel>
    </Div>
  )
}

export default SideMenuLink

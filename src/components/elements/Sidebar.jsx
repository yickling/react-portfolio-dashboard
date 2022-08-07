import React from 'react';
import { FaBars } from 'react-icons/fa';
import { faHouse, faChartPie, faChartLine, faCoins, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components";
import { Link, useLocation } from 'wouter';

import { Logo, MenuIcon } from "./index";

export const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }

  border-color: #dedfe2;
  border-style: solid;
  border-width: 1px 1px 0px 0px;

  flex-grow: 1;
  flex-shrink: 1;
  position: sticky;
  left: 0px;
  top: 0px;
  z-index: 2;
`;

const NavLinkContent = styled.div`
  width: 90%;
  color: ${(props) => props.active ? 'white' : '#808080'};
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  
  border-radius: 12px;
  background-color: ${(props) => props.active ? props.theme.colors.accent : null};
  `
  

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  min-width: 15rem;
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;



const SidebarMenuIcon = ({ icon, style }) => (<MenuIcon style={{ padding: '1rem', marginLeft: '0.5rem', ...style }} icon={icon} />)

const SidebarMenuItem = ({ icon, title, to }) => {
  const [location] = useLocation();

  const active = (location === '/' && title === 'Home') 
    || location.substring(1, location.length).toLowerCase() === title.toLowerCase();

  return (
    <Link to={to} >
      <NavLinkContent active={active}>
        <SidebarMenuIcon icon={icon} />{title}
      </NavLinkContent>
    </Link>
  )
}

const Sidebar = () => (
  <Nav>
    <Bars />

    <NavMenu>
      <Logo image="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" style={{ marginLeft: '2.5rem', marginBottom: '2rem' }} />
      <SidebarMenuItem icon={faHouse} title='Home' to='/' />
      <SidebarMenuItem icon={faChartPie} title='Assets' to='/assets' />
      <SidebarMenuItem icon={faChartLine} title='Trade' to='/trade' />
      <SidebarMenuItem icon={faCoins} title='Pay' to='/pay' />
      <SidebarMenuItem icon={faEllipsisVertical} title='More' to='/more' />
    </NavMenu>
  </Nav>
);
  
export default Sidebar;
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { faHouse, faChartPie, faChartLine, faCoins, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components";
import { Link } from 'wouter';

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
  
export const NavLink = styled(Link)`
  width: 100%;
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  margin: 0.25rem;
  padding-left: 5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &.active {
    color: #000000;
  }
`;
  
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
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
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



const SidebarMenuIcon = ({ icon, style }) => (<MenuIcon style={{ paddingRight: '1rem' }} icon={icon} />)

const Sidebar = () => {
  return (
    <Nav>
      <Bars />

      <NavMenu>
        <Logo image="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"/>
        <NavLink to='/'>
          <SidebarMenuIcon icon={faHouse} />Home
        </NavLink>
        <NavLink to='/assets'>
          <SidebarMenuIcon icon={faChartPie} />Assets
        </NavLink>
        <NavLink to='/trade'>
          <SidebarMenuIcon icon={faChartLine} />Trade
        </NavLink>
        <NavLink to='/pay'>
          <SidebarMenuIcon icon={faCoins} />Pay
        </NavLink>
        <NavLink to='/more'>
          <SidebarMenuIcon icon={faEllipsisVertical} />More
        </NavLink>
      </NavMenu>
    </Nav>
  );
};
  
export default Sidebar;
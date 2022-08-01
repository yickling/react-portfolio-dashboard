import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from "styled-components";
import { Link } from 'wouter';
import { Text } from "rebass";
import { faBell, faGrip } from '@fortawesome/free-solid-svg-icons'

import { Logo, MenuIcon } from './index';

export const Nav = styled.nav`
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  border-color: #dedfe2;
  border-style: solid;
  border-width: 1px 0px 1px 0px;
`;
  
export const NavLink = styled(Link)`
  background-color: red;
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
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
  

export const Divider = styled.div`
  height: 32px;
  align-self: center;
  width: 1px;
  background: var(--line);
  margin-left: 16px;
  margin-right: 16px;
  background-color: rgba(91, 97, 110, 0.2);
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
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
  align-self: center;
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;


const TopbarMenuIcon = ({ icon, style }) => (<MenuIcon style={{ padding: '0.25rem' }} icon={icon} />)

// const TopbarButton = ({ icon, style }) => (<div style={{ backgroundColor: 'rgba(91, 97, 110, 0.2)', marginLeft: '0.25rem', marginRight: '0.25rem', width: '42px', height: '42px' }}><TopbarMenuIcon icon={icon} style={{ margin: '0.75rem', borderRadius: '50%' }} /></div>)

const Topbar = () => {
  return (
    <Nav>
      <Bars />

      <NavMenu>
        <Text fontSize={4} sx={{ paddingLeft: '2rem' }}>Assets</Text>
        {/*<NavLink to='/events'>
          Events
        </NavLink>
        <NavLink to='/annual'>
          Annual Report
        </NavLink>
        <NavLink to='/team'>
          Teams
        </NavLink>
        <NavLink to='/blogs'>
          Blogs
        </NavLink>
        <NavLink to='/sign-up'>
          Sign Up
        </NavLink>*/}
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
    </NavMenu>
      <NavBtn>
        <NavLink to='#'><TopbarMenuIcon icon={faBell} /></NavLink>
        <NavLink to='#'><TopbarMenuIcon icon={faGrip} /></NavLink>
        <Divider />
        <NavLink to='/signin'><Logo image="https://images.coinbase.com/avatar?h=5892aac6c3a0a703a95466usSqfbgKRV0vqFVUEfbttASLSXW%2FFmWLPqSLDx%0A2G6n&s=128"/></NavLink>
      </NavBtn>
    </Nav>
  );
};
  
export default Topbar;
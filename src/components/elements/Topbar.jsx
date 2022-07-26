import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from "styled-components";
import { Link } from 'wouter';
import { Text } from "rebass";

export const Nav = styled.nav`
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  border-color: #dedfe2;
  border-style: solid;
  border-width: 1px 0px 1px 0px;
`;
  
export const NavLink = styled(Link)`
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
        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};
  
export default Topbar;
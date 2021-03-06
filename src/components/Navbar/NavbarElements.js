import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: green;
  		height: 80px;
  //   margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: left;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavLogo = styled(LinkR)`
  color: red;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: -24px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

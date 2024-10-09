import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";
import { keyframes } from "@emotion/react";

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.85);
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-family: "Roboto Mono", monospace;
  z-index: 15;
  position: fixed;
  user-select: none;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 65%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const NavItem = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  margin-right: 2rem;
  line-height: 3rem;
  padding-bottom: 0.5rem;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  &.active {
    color: #ff00ff;
    border-bottom: 3px solid #ff00ff;
  }

  &:hover {
    color: #ff00ff;
    border-bottom: 3px solid #ff00ff;
    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    padding: 0.5rem 0;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5rem;
  list-style: none;
  text-align: center;
  color: #fff;

  @media (max-width: 1353px) {
    display: none;
  }
`;

export const LinktreeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const LinktreeIcon = styled.img`
  width: 100%;
  height: 40px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 20%;
    height: 20px;
    object-fit: cover;
  }
`;

export const LinktreeText = styled.p`
  color: #fff;
  margin-right: 1rem;
`;

export const HamburgerMenu = styled.button`
  display: none;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  background-color: #400e39;
  color: #fff;
  margin-right: 2rem;
  border: 2px solid #b502b5;
  border-radius: 25%;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ac2599;
    color: #400e39;
    border: 2px solid #ac2599;
  }

  @media (max-width: 1353px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const MobileNavMenu = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  position: fixed;
  height: 38%;
  width: 20%;
  top: 100px;
  right: 0;
  z-index: 999;
  padding: 1rem 0;
  animation: ${slideIn} 0.3s ease-out;

  @media (min-width: 1354px) {
    display: none;
  }
  
  @media (max-width: 768px) {
    top: 99px;
    width: 35%;
  }
  @media (max-width: 480px) {
    top: 99px;
    width: 35%;
`;

export const MobileNavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 1rem 0;
  
  font-size: 1.2rem;
  user-select: none;
  padding: 0.2rem;
  transition: color 0.5s ease, text-shadow 0.5s ease;
  &.active {
    color: #ff00ff;
    border-bottom: 3px solid #ff00ff;
  }

  &:hover {
    color: #ff00ff;
    transform: scale(1.05);
    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff;
  @media (max-width: 768px) {
    font-size: 1rem;
  }

`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  z-index: 998;
`;

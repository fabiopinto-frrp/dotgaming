import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.9);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  z-index: 1;
  position: relative;
  user-select: none;
`;

export const NavLogo = styled(Link)`
  margin-left: 5%;
  padding: 0 1rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 60%;
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
    text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5rem;
  list-style: none;
  text-align: center;
  color: #fff;
`;

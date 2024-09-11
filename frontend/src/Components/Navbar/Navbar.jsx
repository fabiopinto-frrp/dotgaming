import { LogoImage } from "../Images/ImageElements";
import logo from "../../Assets/logo.png";
import linktree from "../../Assets/linktree.png";
import styled from "@emotion/styled";
import {
  Nav,
  NavMenu,
  NavItem,
  NavLogo,
  LinktreeIcon,
  LinktreeText,
} from "./NavbarElements";

const DotGamingLogo = styled(NavLogo)`
  min-width: 175px;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <DotGamingLogo to="/">
          <LogoImage src={logo} alt="Logo" draggable="false" />
        </DotGamingLogo>

        <NavMenu>
          <NavItem to="/">INÍCIO</NavItem>

          <NavItem to="/about">SOBRE NÓS</NavItem>

          <NavItem to="/portfolio">PORTFÓLIO</NavItem>

          <NavItem to="/contactUs">CONTACTOS</NavItem>
        </NavMenu>
        <NavMenu>
          <NavLogo to="https://linktr.ee/dotgamingpt" target="_blank">
            <LinktreeText>Linktree</LinktreeText>
            <LinktreeIcon src={linktree} alt="Linktree" draggable="false" />
          </NavLogo>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

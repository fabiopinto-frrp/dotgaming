import { LogoImage } from "../Images/ImageElements";
import logo from "../../Assets/logo.png";
import linktree from "../../Assets/linktree.png";
import styled from "@emotion/styled";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import {
  Nav,
  NavMenu,
  NavItem,
  NavLogo,
  LinktreeIcon,
  LinktreeText,
  MobileNavMenu,
  MobileNavItem,
  HamburgerMenu,
  LinktreeContainer,
  Overlay,
} from "./NavbarElements";

const DotGamingLogo = styled(NavLogo)`
  min-width: 0px;
  min-height: 0px;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Nav>
        <HamburgerMenu onClick={toggleMenu}>
          <RxHamburgerMenu size={24} />
        </HamburgerMenu>

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
      {isOpen && (
        <>
          <Overlay onClick={closeMenu} />
          <MobileNavMenu>
            <MobileNavItem to="/" onClick={toggleMenu}>
              INÍCIO
            </MobileNavItem>
            <MobileNavItem to="/about" onClick={toggleMenu}>
              SOBRE NÓS
            </MobileNavItem>
            <MobileNavItem to="/portfolio" onClick={toggleMenu}>
              PORTFÓLIO
            </MobileNavItem>
            <MobileNavItem to="/contactUs" onClick={toggleMenu}>
              CONTACTOS
            </MobileNavItem>
            <MobileNavItem
              to="https://linktr.ee/dotgamingpt"
              target="_blank"
              onClick={toggleMenu}
            >
              <LinktreeContainer>
                <LinktreeText>Linktree</LinktreeText>
                <LinktreeIcon src={linktree} alt="Linktree" draggable="false" />
              </LinktreeContainer>
            </MobileNavItem>
          </MobileNavMenu>
        </>
      )}
    </>
  );
};

export default Navbar;

import { LogoImage } from "../Images/ImageElements";
import logo from "../../Assets/logo.png";
import { Nav, NavMenu, NavItem, NavLogo } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <LogoImage src={logo} alt="Logo" />
        </NavLogo>

        <NavMenu>
          <NavItem to="/">INÍCIO</NavItem>

          <NavItem to="/about">SOBRE NÓS</NavItem>

          <NavItem to="/portfolio">PORTFÓLIO</NavItem>

          <NavItem to="/contactUs">CONTACTOS</NavItem>
        </NavMenu>
        <NavMenu>
          <NavItem to="/login">Login</NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

import {
  FooterContainer,
  FooterSubContainer,
  FooterLink,
  FooterText,
  FooterLeftContainer,
  FooterContent,
  FooterFlagContainer,
  FooterFlag,
  FooterTextBold,
} from "./FooterElements";
import styled from "@emotion/styled";
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";

const FooterMiddleContainer = styled(FooterLeftContainer)`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

const FooterLanguageContainer = styled(FooterLeftContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneIcon = styled(MdOutlinePhoneInTalk)`
  color: #ff00ff;
  font-size: 1.5rem;
  transform: translateY(0.45rem);
`;
const EmailIcon = styled(MdOutlineMailOutline)`
  color: #ff00ff;
  font-size: 1.5rem;
  transform: translateY(0.45rem);
`;

/* footer (navegacao, email, numero de telemovel, 
por um about us resumido e todas as redes, 
para linguagem bandeira de portugal)
*/

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubContainer>
          <FooterLeftContainer>
            <FooterText>
              <FooterLink to="/">• Início</FooterLink>
              <FooterLink to="/about">• Sobre nós</FooterLink>
              <FooterLink to="/portfolio">• Portfólio</FooterLink>
              <FooterLink to="/contactUs">• Contactos</FooterLink>
            </FooterText>
          </FooterLeftContainer>

          <FooterMiddleContainer>
            <FooterTextBold>Contactos:</FooterTextBold>
            <FooterText>
              <FooterContent>
                <EmailIcon /> | geral@dotgaming.pt
              </FooterContent>
              <FooterContent>
                <PhoneIcon /> | (+351) 912259093
              </FooterContent>
              <FooterContent></FooterContent>
              <FooterContent></FooterContent>
            </FooterText>
          </FooterMiddleContainer>
          <FooterLanguageContainer>
            <FooterFlagContainer>
              <FooterFlag
                className="flag"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2560px-Flag_of_Portugal.svg.png"
              />
            </FooterFlagContainer>
          </FooterLanguageContainer>
        </FooterSubContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;

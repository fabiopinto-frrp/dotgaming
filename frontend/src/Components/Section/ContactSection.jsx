import {
  SectionDescription,
  SectionDescriptionContainer,
  SectionTitle,
  SectionContainer,
} from "./SectionElements";
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
  display: flex;
  align-items: center;
  height: calc(100vh + 100px);
`;

const ContactDescriptionContainer = styled(SectionDescriptionContainer)`
  margin-right: 0;
`;

const PhoneIcon = styled(MdOutlinePhoneInTalk)`
  color: #ff00ff;
  font-size: 1.5rem;
  transform: translateY(0.45rem);
  margin-left: -1.1rem;
  @media screen and (max-width: 503px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 503px) {
    font-size: 1rem;
  }
`;
const EmailIcon = styled(MdOutlineMailOutline)`
  color: #ff00ff;
  font-size: 1.5rem;
  transform: translateY(0.45rem);
  @media screen and (max-width: 503px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 503px) {
    font-size: 0.9rem;
  }
`;

const ContactDetails = styled(SectionDescription)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;

const ContactContent = styled.p`
  text-decoration: none;
  margin-top: -0.5rem;
  color: #fff;
  font-size: 1rem;
  user-select: text;
  @media screen and (max-width: 503px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 503px) {
    font-size: 0.7rem;
  }
`;

const ContactSection = () => {
  AOS.init();
  return (
    <>
      <SecondarySectionContainer>
        <ContactDescriptionContainer>
          <SectionTitle>Contactos</SectionTitle>
          <ContactDetails>
            <ContactContent>
              <PhoneIcon /> | +351 123 456 789
            </ContactContent>
            <ContactContent>
              <EmailIcon /> | geral@dotgaming.pt
            </ContactContent>
          </ContactDetails>
        </ContactDescriptionContainer>
      </SecondarySectionContainer>
    </>
  );
};

export default ContactSection;

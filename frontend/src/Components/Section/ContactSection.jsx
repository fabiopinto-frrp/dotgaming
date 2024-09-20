import {
  SectionDescription,
  SectionDescriptionContainer,
  SectionTitle,
  SectionContainer,
} from "./SectionElements";
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import styled from "@emotion/styled";

const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
  display: flex;
  align-items: center;
  height: 50vh;
  padding-top: 14.5rem;
`;

const PhoneIcon = styled(MdOutlinePhoneInTalk)`
  color: #ff00ff;
  font-size: 1.5rem;
  transform: translateY(0.45rem);
  margin-left: -1.1rem;
`;
const EmailIcon = styled(MdOutlineMailOutline)`
  color: #ff00ff;
  font-size: 1.5rem;
  transform: translateY(0.45rem);
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
`;

const ContactSection = () => {
  return (
    <>
      <SecondarySectionContainer>
        <SectionDescriptionContainer>
          <SectionTitle>Contactos</SectionTitle>
          <ContactDetails>
            <ContactContent>
              <PhoneIcon /> | +351 123 456 789
            </ContactContent>
            <ContactContent>
              <EmailIcon /> | geral@dotgaming.pt
            </ContactContent>
          </ContactDetails>
        </SectionDescriptionContainer>
      </SecondarySectionContainer>
    </>
  );
};

export default ContactSection;

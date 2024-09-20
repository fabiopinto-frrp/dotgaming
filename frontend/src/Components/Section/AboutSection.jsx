import PropTypes from "prop-types";
import {
  SectionDescription,
  SectionDescriptionContainer,
  SectionImage,
  SectionImageContainer,
  SectionTitle,
  SectionContainer,
} from "./SectionElements";
import styled from "@emotion/styled";

const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding-top: 100px;
`;

const AboutSection = ({ AboutItems }) => {
  return (
    <>
      {AboutItems.map((item, index) => (
        <SecondarySectionContainer key={index}>
          <SectionImageContainer>
            <SectionImage src={item.image} alt="teamImage" />
          </SectionImageContainer>
          <SectionDescriptionContainer>
            <SectionTitle>{item.title}</SectionTitle>
            <SectionDescription>{item.description}</SectionDescription>
          </SectionDescriptionContainer>
        </SecondarySectionContainer>
      ))}
    </>
  );
};

AboutSection.propTypes = {
  AboutItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AboutSection;

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
  padding-top: 10rem;
  padding-bottom: 4rem;
`;

const SecondarySectionTitle = styled(SectionTitle)`
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SecondarySectionDescription = styled(SectionDescription)`
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    text-align: justify; /* Align text for better readability */
    padding: 1rem; /* Add padding for better spacing */
    margin: 0 auto; /* Center the text block */
    line-height: 1.5;
  }
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
            <SecondarySectionTitle>{item.title}</SecondarySectionTitle>
            <SecondarySectionDescription>
              {item.description}
            </SecondarySectionDescription>
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

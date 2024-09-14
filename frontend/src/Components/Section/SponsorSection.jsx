import {
  SectionContainer,
  SectionTitle,
  LogoSubContainer,
  LogoItem,
  LogosContainer,
} from "./SectionElements";
import PropTypes from "prop-types";

const SponsorSection = ({ SponsorItems }) => {
  return (
    <>
      <SectionContainer>
        <SectionTitle>Sponsors</SectionTitle>
        <LogoSubContainer>
          <LogosContainer>
            {SponsorItems.map((logo, index) => (
              <LogoItem
                key={index}
                src={logo.image}
                alt={`Sponsor ${index + 1}`}
              />
            ))}
          </LogosContainer>
        </LogoSubContainer>
      </SectionContainer>
    </>
  );
};

SponsorSection.propTypes = {
  SponsorItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default SponsorSection;

import {
  SectionContainer,
  SectionContent,
  SectionSubTitle,
  SectionTitle,
  SectionIcon,
  SectionSubContainer,
} from "./SectionElements";

import PropTypes from "prop-types";

const PrimarySection = ({ ServiceItems }) => {
  return (
    <>
      <SectionContainer>
        <SectionTitle>Serviços</SectionTitle>
        <SectionSubContainer>
          {ServiceItems.map((item, index) => (
            <div key={index} className="grid-item">
              <SectionIcon src={item.icon}></SectionIcon>
              <SectionSubTitle>{item.subTitle}</SectionSubTitle>
              <SectionContent>{item.content}</SectionContent>
            </div>
          ))}
        </SectionSubContainer>
      </SectionContainer>
    </>
  );
};
PrimarySection.propTypes = {
  ServiceItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default PrimarySection;

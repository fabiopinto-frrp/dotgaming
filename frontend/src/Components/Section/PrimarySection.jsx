import {
  PrimarySectionContainer,
  PrimarySectionContent,
  PrimarySectionSubTitle,
  PrimarySectionTitle,
  PrimarySectionIcon,
  PrimarySectionSubContainer,
} from "./SectionElements";

import PropTypes from "prop-types";

const PrimarySection = ({ items }) => {
  return (
    <>
      <PrimarySectionContainer>
        <PrimarySectionTitle>Serviços</PrimarySectionTitle>
        <PrimarySectionSubContainer>
          {items.map((item, index) => (
            <div key={index} className="grid-item">
              <PrimarySectionIcon src={item.icon}></PrimarySectionIcon>
              <PrimarySectionSubTitle>{item.subTitle}</PrimarySectionSubTitle>
              <PrimarySectionContent>{item.content}</PrimarySectionContent>
            </div>
          ))}
        </PrimarySectionSubContainer>
      </PrimarySectionContainer>
    </>
  );
};
PrimarySection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default PrimarySection;

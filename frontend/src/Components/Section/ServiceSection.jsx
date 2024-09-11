import {
  SectionContainer,
  SectionContent,
  SectionSubTitle,
  SectionTitle,
  SectionSubContainer,
  SectionItem,
  SectionItemBg,
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
              <SectionItem>
                <SectionSubTitle>{item.subTitle}</SectionSubTitle>
                <SectionContent>{item.content}</SectionContent>
                <SectionItemBg className="section-item-bg" />
              </SectionItem>
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
      subTitle: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default PrimarySection;

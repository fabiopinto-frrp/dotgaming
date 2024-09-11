import {
  SectionContainer,
  SectionTitle,
  SectionSubContainer,
  SectionContent,
  SectionSubTitle,
  SectionItem,
  SectionItemBg,
} from "./SectionElements";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
`;

const SecondarySectionItem = styled(SectionItem)`
  background-color: #1b0618;
`;

const SecondaryItemBg = styled(SectionItemBg)`
  background-color: #f772e4;
`;

const SecondarySection = ({ EventItems }) => {
  return (
    <>
      <SecondarySectionContainer>
        <SectionTitle>Próximos Eventos</SectionTitle>
        <SectionSubContainer>
          {EventItems.map((item, index) => (
            <div key={index} className="grid-item">
              <SecondarySectionItem>
                <SectionSubTitle>{item.subTitle}</SectionSubTitle>
                <SectionContent>{item.content}</SectionContent>
                <SecondaryItemBg className="section-item-bg" />
              </SecondarySectionItem>
            </div>
          ))}
        </SectionSubContainer>
      </SecondarySectionContainer>
    </>
  );
};

SecondarySection.propTypes = {
  EventItems: PropTypes.arrayOf(
    PropTypes.shape({
      subTitle: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SecondarySection;

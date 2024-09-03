import {
  SectionContainer,
  SectionTitle,
  SectionSubContainer,
  SectionContent,
  SectionIcon,
  SectionSubTitle,
} from "./SectionElements";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
`;

const SecondarySection = ({ EventItems }) => {
  return (
    <>
      <SecondarySectionContainer>
        <SectionTitle>Próximos Eventos</SectionTitle>
        <SectionSubContainer>
          {EventItems.map((item, index) => (
            <div key={index} className="grid-item">
              <SectionIcon src={item.icon}></SectionIcon>
              <SectionSubTitle>{item.subTitle}</SectionSubTitle>
              <SectionContent>{item.content}</SectionContent>
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
      icon: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SecondarySection;

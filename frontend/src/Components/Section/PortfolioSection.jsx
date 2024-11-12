import styled from "@emotion/styled";
import {
  SectionContainer,
  SectionTitle,
  SectionDescriptionContainer,
} from "./SectionElements";
import EventCard from "../Cards/EventCard/EventCard";
import EventItems from "../../SectionsData/EventData";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: 10rem;
  padding-bottom: 4rem;
`;

const SectionTitleContainer = styled(SectionDescriptionContainer)`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-right: 0;
`;

const PortfolioSection = () => {
  AOS.init();
  return (
    <>
      <SecondarySectionContainer>
        <SectionTitleContainer>
          <SectionTitle>Eventos</SectionTitle>

          <EventCard EventItems={EventItems} />
        </SectionTitleContainer>
      </SecondarySectionContainer>
    </>
  );
};

export default PortfolioSection;

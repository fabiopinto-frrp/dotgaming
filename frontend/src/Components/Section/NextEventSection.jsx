import styled from "@emotion/styled";
import NextEventCard from "../Cards/NextEventCard/NextEventCard";
import { SectionContainer, SectionTitle } from "./SectionElements";
import NextEventItems from "../../SectionsData/NextEventsData";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
`;

const SecondarySection = () => {
  AOS.init();
  return (
    <>
      <SecondarySectionContainer>
        <SectionTitle>Próximos Eventos</SectionTitle>

        <NextEventCard NextEventItems={NextEventItems} />
      </SecondarySectionContainer>
    </>
  );
};

export default SecondarySection;

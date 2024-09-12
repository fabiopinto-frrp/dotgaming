import styled from "@emotion/styled";
import NextEventCard from "../Cards/NextEventCard/NextEventCard";
import { SectionContainer, SectionTitle } from "./SectionElements";
import NextEventItems from "../../SectionsData/NextEventsData";

const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
`;

const SecondarySection = () => {
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

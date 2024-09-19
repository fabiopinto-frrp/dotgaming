import {
  SectionContainer,
  SectionSubContainer,
  SectionTitle,
} from "./SectionElements";
import TeamItems from "../../SectionsData/TeamData";
import PhotoCard from "../Cards/PhotoCard/PhotoCard";

const TeamSection = () => {
  return (
    <>
      <SectionContainer>
        <SectionTitle>Nossa Equipa</SectionTitle>
        <SectionSubContainer>
          <PhotoCard TeamItems={TeamItems} />
        </SectionSubContainer>
      </SectionContainer>
    </>
  );
};

export default TeamSection;

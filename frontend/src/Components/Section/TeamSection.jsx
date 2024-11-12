import {
  SectionContainer,
  SectionSubContainer,
  SectionTitle,
} from "./SectionElements";
import TeamItems from "../../SectionsData/TeamData";
import PhotoCard from "../Cards/PhotoCard/PhotoCard";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  AOS.init();
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

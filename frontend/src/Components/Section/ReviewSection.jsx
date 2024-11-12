import ReviewCard from "../Cards/ReviewCard/ReviewCard";
import {
  SectionContainer,
  SectionSubContainer,
  SectionTitle,
  CarouselSpacing,
} from "./SectionElements";
import styled from "@emotion/styled";
import ReviewItems from "../../SectionsData/ReviewData";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
`;

const SecondarySubContainer = styled(SectionSubContainer)`
  grid-template-columns: repeat(3, 1fr);
`;

const ContainerSpacing = styled(CarouselSpacing)`
  height: 1.5rem;
`;

const ReviewSection = () => {
  AOS.init();
  return (
    <>
      <SecondarySectionContainer>
        <ContainerSpacing />
        <SectionTitle>Comentários</SectionTitle>
        <SecondarySubContainer>
          <ReviewCard ReviewItems={ReviewItems} />
        </SecondarySubContainer>
      </SecondarySectionContainer>
    </>
  );
};

export default ReviewSection;

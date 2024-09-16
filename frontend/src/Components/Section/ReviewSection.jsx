import ReviewCard from "../Cards/ReviewCard/ReviewCard";
import {
  SectionContainer,
  SectionSubContainer,
  SectionTitle,
} from "./SectionElements";
import styled from "@emotion/styled";
import ReviewItems from "../../SectionsData/ReviewData";

const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
`;

const SecondarySubContainer = styled(SectionSubContainer)`
  grid-template-columns: repeat(3, 1fr);
`;

const ReviewSection = () => {
  return (
    <>
      <SecondarySectionContainer>
        <SectionTitle>Comentários</SectionTitle>
        <SecondarySubContainer>
          <ReviewCard ReviewItems={ReviewItems} />
        </SecondarySubContainer>
      </SecondarySectionContainer>
    </>
  );
};

export default ReviewSection;

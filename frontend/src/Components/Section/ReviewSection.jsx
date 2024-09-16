import ReviewCard from "../Cards/ReviewCard/ReviewCard";
import { SectionContainer, SectionTitle } from "./SectionElements";
import styled from "@emotion/styled";
import ReviewItems from "../../SectionsData/ReviewData";

const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
  height: calc(auto+10%);
`;

const ReviewSection = () => {
  return (
    <>
      <SecondarySectionContainer>
        <SectionTitle>Comentários</SectionTitle>
        <ReviewCard ReviewItems={ReviewItems} />
      </SecondarySectionContainer>
    </>
  );
};

export default ReviewSection;

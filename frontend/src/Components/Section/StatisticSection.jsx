import StatisticCard from "../Cards/StatisticCard/StatisticCard";
import {
  SectionContainer,
  SectionSubContainer,
  SectionTitle,
} from "./SectionElements";
import styled from "@emotion/styled";

const StatisticSubContainer = styled(SectionSubContainer)`
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
`;

const StatisticSection = () => {
  return (
    <>
      <SectionContainer>
        <SectionTitle>Nossos Números</SectionTitle>
        <StatisticSubContainer>
          <StatisticCard />
          <StatisticCard />
          <StatisticCard />
        </StatisticSubContainer>
      </SectionContainer>
    </>
  );
};

export default StatisticSection;

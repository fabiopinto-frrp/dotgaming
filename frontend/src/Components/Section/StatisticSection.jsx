import StatisticCard from "../Cards/StatisticCard/StatisticCard";
import {
  SectionContainer,
  SectionSubContainer,
  SectionTitle,
} from "./SectionElements";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";

const StatisticSubContainer = styled(SectionSubContainer)`
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
`;

const StatisticSection = () => {
  AOS.init();
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

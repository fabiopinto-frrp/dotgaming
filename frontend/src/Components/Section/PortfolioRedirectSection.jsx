import PortfolioRedirectButton from "../Buttons/PortfolioRedirectButton";
import {
  SectionContainer,
  SectionTitle,
  SectionDescription,
} from "./SectionElements";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
const SecondarySectionContainer = styled(SectionContainer)`
  background-color: #0c030c;
`;

const PortfolioRedirectSection = () => {
  AOS.init();
  return (
    <>
      <SecondarySectionContainer>
        <SectionTitle>Conheça o nosso Portfólio</SectionTitle>
        <SectionDescription>
          Visite o nosso Portfólio para visualizar todo o nosso trabalho.{" "}
        </SectionDescription>
        <PortfolioRedirectButton />
      </SecondarySectionContainer>
    </>
  );
};

export default PortfolioRedirectSection;

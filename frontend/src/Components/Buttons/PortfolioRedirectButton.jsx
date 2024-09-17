import {
  PortfolioRedirectBtn,
  PortfolioRedirectButtonContainer,
} from "./ButtonElements";

const PortfolioRedirectButton = () => {
  return (
    <>
      <PortfolioRedirectButtonContainer>
        <PortfolioRedirectBtn to="/portfolio">Portfólio</PortfolioRedirectBtn>
      </PortfolioRedirectButtonContainer>
    </>
  );
};

export default PortfolioRedirectButton;

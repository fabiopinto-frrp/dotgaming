import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PortfolioSection from "../../Components/Section/PortfolioSection";
import { PortfolioBody } from "./PortfolioElements";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>DotGaming | Portfolio</title>
        </Helmet>
      </HelmetProvider>
      <PortfolioBody>
        <Navbar />
        <PortfolioSection />
        <Footer />
      </PortfolioBody>
    </>
  );
};

export default Portfolio;

import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/Section/HeroSection";
import ServiceSection from "../../Components/Section/ServiceSection";
import NextEventSection from "../../Components/Section/NextEventSection";
import ServiceItems from "../../SectionsData/ServicesData";
import SponsorItems from "../../SectionsData/SponsorData";
import { HomeBody } from "./HomeElements";
import ScrollUpButton from "../../Components/Buttons/ScrollUpButton";
import SponsorSection from "../../Components/Section/SponsorSection";
import ReviewSection from "../../Components/Section/ReviewSection";
import StatisticSection from "../../Components/Section/StatisticSection";
import PortfolioRedirectSection from "../../Components/Section/PortfolioRedirectSection";
import TeamSection from "../../Components/Section/TeamSection";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>DotGaming | Home</title>
        </Helmet>
      </HelmetProvider>
      <HomeBody>
        <Navbar />
        <HeroSection />
        <ServiceSection ServiceItems={ServiceItems} />
        <NextEventSection />
        <SponsorSection SponsorItems={SponsorItems} />
        <ReviewSection />
        <StatisticSection />
        <PortfolioRedirectSection />
        <TeamSection />
        <Footer />
        <ScrollUpButton />
      </HomeBody>
    </>
  );
};

export default Home;

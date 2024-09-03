import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/Section/HeroSection";
import PrimarySection from "../../Components/Section/PrimarySection";
import SecondarySection from "../../Components/Section/SecondarySection";
import ServiceItems from "../../SectionsData/Servicesitems";
import EventItems from "../../SectionsData/EventsData";
import { HomeBody } from "./HomeElements";

const Home = () => {
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
        <PrimarySection ServiceItems={ServiceItems} />
        <SecondarySection EventItems={EventItems} />
      </HomeBody>
    </>
  );
};

export default Home;

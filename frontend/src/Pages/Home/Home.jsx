import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/Section/HeroSection";
import ServiceSection from "../../Components/Section/ServiceSection";
import EventSection from "../../Components/Section/EventSection";
import ServiceItems from "../../SectionsData/ServicesData";
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
        <ServiceSection ServiceItems={ServiceItems} />
        <EventSection EventItems={EventItems} />
      </HomeBody>
    </>
  );
};

export default Home;

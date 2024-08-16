import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/Section/HeroSection";
import PrimarySection from "../../Components/Section/PrimarySection";
import items from "../../SectionsData/Servicesitems";
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
        <PrimarySection items={items} />
      </HomeBody>
    </>
  );
};

export default Home;

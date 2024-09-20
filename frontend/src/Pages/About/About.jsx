import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AboutSection from "../../Components/Section/AboutSection";
import AboutItems from "../../SectionsData/AboutData";
import { AboutBody } from "./AboutElements";

const About = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>DotGaming | About Us</title>
        </Helmet>
      </HelmetProvider>
      <AboutBody>
        <Navbar />
        <AboutSection AboutItems={AboutItems} />
        <Footer />
      </AboutBody>
    </>
  );
};

export default About;

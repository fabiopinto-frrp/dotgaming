import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>DotGaming | About Us</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
    </>
  );
};

export default About;

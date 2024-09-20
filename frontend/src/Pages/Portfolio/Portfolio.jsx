import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Portfolio = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>DotGaming | Portfolio</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />

      <Footer />
    </>
  );
};

export default Portfolio;

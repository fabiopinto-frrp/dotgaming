import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";

const Portfolio = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>DotGaming | Portfolio</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
    </>
  );
};

export default Portfolio;

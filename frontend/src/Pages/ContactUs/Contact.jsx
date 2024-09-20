import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>DotGaming | Contact Us</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />

      <Footer />
    </>
  );
};

export default Contact;

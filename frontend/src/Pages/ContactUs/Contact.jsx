import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ContactSection from "../../Components/Section/ContactSection";
import { ContactBody } from "./ContactElements";

const Contact = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>DotGaming | Contact Us</title>
        </Helmet>
      </HelmetProvider>
      <ContactBody>
        <Navbar />
        <ContactSection />
        <Footer />
      </ContactBody>
    </>
  );
};

export default Contact;

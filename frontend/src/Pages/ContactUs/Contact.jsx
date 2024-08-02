import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>DotGaming | Contact Us</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
    </>
  );
};

export default Contact;

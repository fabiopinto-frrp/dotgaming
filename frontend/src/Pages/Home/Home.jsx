import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/Section/HeroSection";
import PrimarySection from "../../Components/Section/PrimarySection";
import testIcon from "../../Assets/favicon.png";

const Home = () => {
  const items = [
    {
      icon: { testIcon },
      subTitle: "Sub Title 1",
      content: "Content 1",
    },
    {
      icon: { testIcon },
      subTitle: "Sub Title 2",
      content: "Content 2",
    },
    {
      icon: { testIcon },
      subTitle: "Sub Title 3",
      content: "Content 3",
    },
  ];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>DotGaming | Home</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <HeroSection />
      <PrimarySection items={items} />
    </>
  );
};

export default Home;

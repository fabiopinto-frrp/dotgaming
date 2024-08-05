import {
  BackgroundOpacity,
  Hero,
  HeroHeader,
  HeroSubHeader,
  HeroIcon,
} from "./SectionElements";
import { HeroImage, LogoImage } from "../Images/ImageElements";
import HeroBackground from "../../Assets/Gaming.jpg";
import Icon from "../../Assets/favicon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  AOS.init();

  return (
    <>
      <Hero>
        <BackgroundOpacity />
        <HeroImage src={HeroBackground} alt="Hero Image" draggable="false" />
        <HeroHeader data-aos="zoom-in">WELCOME TO</HeroHeader>
        <HeroSubHeader
          data-aos="zoom-in"
          data-aos-offset="150"
          data-aos-duration="1000"
          data-text="DOTGAMING"
        >
          DOTGAMING
        </HeroSubHeader>
        <HeroIcon>
          <LogoImage src={Icon} alt="HeroIcon" draggable="false" />
        </HeroIcon>
      </Hero>
    </>
  );
};

export default HeroSection;

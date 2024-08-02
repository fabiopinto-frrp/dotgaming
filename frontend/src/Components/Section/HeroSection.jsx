import {
  BackgroundOpacity,
  Hero,
  HeroHeader,
  HeroSubHeader,
} from "./SectionElements";
import { HeroImage } from "../Images/ImageElements";
import HeroBackground from "../../Assets/Gaming.jpg";

const HeroSection = () => {
  return (
    <>
      <Hero>
        <BackgroundOpacity />
        <HeroImage src={HeroBackground} alt="Hero Image" />
        <HeroHeader>WELCOME TO</HeroHeader>
        <HeroSubHeader>DOTGAMING</HeroSubHeader>
      </Hero>
    </>
  );
};

export default HeroSection;

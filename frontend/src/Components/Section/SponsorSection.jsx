import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  LogoItem,
  SectionTitle,
  CarouselContainer,
  CarouselSpacing,
} from "./SectionElements";
import AOS from "aos";
import "aos/dist/aos.css";

const SponsorSection = ({ SponsorItems }) => {
  AOS.init();
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <>
      <CarouselContainer>
        <SectionTitle>Clientes</SectionTitle>
        <CarouselSpacing />
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {SponsorItems.map((item, index) => (
            <LogoItem
              key={index}
              src={item.image}
              alt={`Company logo ${index + 1}`}
            />
          ))}
        </Carousel>
        <CarouselSpacing />
        <CarouselSpacing />
      </CarouselContainer>
    </>
  );
};

SponsorSection.propTypes = {
  SponsorItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default SponsorSection;

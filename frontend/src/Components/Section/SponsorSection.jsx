import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  LogoItem,
  SectionTitle,
  CarouselContainer,
  CarouselSpacing,
} from "./SectionElements";

const SponsorSection = ({ SponsorItems }) => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
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
        <SectionTitle>Serviços</SectionTitle>
        <CarouselSpacing />
        <Carousel
          responsive={responsive}
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
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
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

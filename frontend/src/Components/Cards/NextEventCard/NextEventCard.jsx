import PropTypes from "prop-types";
import {
  NextEventItem,
  NextEventItemContent,
  NextEventItemSubTitle,
  NextEventSubContainer,
  NextEventItemImage,
  NextEventItemTopOverlay,
  NextEventItemBottomOverlay,
  NextEventItemContentParagraph,
} from "./NextEventCardElements";

const NextEventCard = ({ NextEventItems }) => {
  return (
    <>
      <NextEventSubContainer>
        {NextEventItems.map((item, index) => (
          <div key={index} className="grid-item">
            <NextEventItem>
              <NextEventItemTopOverlay />
              <NextEventItemSubTitle>{item.title}</NextEventItemSubTitle>
              <NextEventItemImage src={item.image} alt={item.title} />
              <NextEventItemBottomOverlay />
              <NextEventItemContent>
                <NextEventItemContentParagraph>
                  {item.serviceType}
                </NextEventItemContentParagraph>
                <NextEventItemContentParagraph>
                  {item.desc}
                </NextEventItemContentParagraph>
                <NextEventItemContentParagraph>
                  {item.date}
                </NextEventItemContentParagraph>
              </NextEventItemContent>
            </NextEventItem>
          </div>
        ))}
      </NextEventSubContainer>
    </>
  );
};

NextEventCard.propTypes = {
  NextEventItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      serviceType: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NextEventCard;

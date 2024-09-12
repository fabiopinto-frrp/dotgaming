import PropTypes from "prop-types";
import {
  NextEventItem,
  NextEventItemContent,
  NextEventItemSubTitle,
  NextEventSubContainer,
} from "./NextEventCardElements";

const NextEventCard = ({ NextEventItems }) => {
  return (
    <>
      <NextEventSubContainer>
        {NextEventItems.map((item, index) => (
          <div key={index} className="grid-item">
            <NextEventItem>
              <NextEventItemSubTitle>{item.subTitle}</NextEventItemSubTitle>
              <NextEventItemContent>{item.content}</NextEventItemContent>
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
      subTitle: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NextEventCard;

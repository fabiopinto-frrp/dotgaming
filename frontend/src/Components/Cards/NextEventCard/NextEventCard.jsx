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
              <NextEventItemSubTitle>{item.title}</NextEventItemSubTitle>
              <NextEventItemContent>{item.desc}</NextEventItemContent>
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

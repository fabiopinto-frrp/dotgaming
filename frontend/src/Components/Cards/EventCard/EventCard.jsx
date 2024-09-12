import PropTypes from "prop-types";

const EventCard = ({ EventItems }) => {
  return <></>;
};
EventCard.propTypes = {
  EventItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default EventCard;

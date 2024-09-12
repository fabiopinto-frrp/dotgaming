import PropTypes from "prop-types";

const EventCard = ({ EventItems }) => {
  return <></>;
};
EventCard.propTypes = {
  EventItems: PropTypes.arrayOf(
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
export default EventCard;

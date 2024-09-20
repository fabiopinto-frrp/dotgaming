import PropTypes from "prop-types";
import {
  EventItem,
  EventItemContent,
  EventItemSubTitle,
  EventSubContainer,
  EventItemImage,
  EventItemTopOverlay,
  EventItemBottomOverlay,
  EventItemContentParagraph,
} from "./EventCardElements";

const EventCard = ({ EventItems }) => {
  return (
    <>
      <EventSubContainer>
        {EventItems.map((item, index) => (
          <div key={index} className="grid-item">
            <EventItem>
              <EventItemTopOverlay />
              <EventItemSubTitle>{item.title}</EventItemSubTitle>
              <EventItemImage src={item.image} alt={item.title} />
              <EventItemBottomOverlay />
              <EventItemContent>
                <EventItemContentParagraph>
                  {item.serviceType}
                </EventItemContentParagraph>
                <EventItemContentParagraph>
                  {item.desc}
                </EventItemContentParagraph>
                <EventItemContentParagraph>
                  {item.date}
                </EventItemContentParagraph>
              </EventItemContent>
            </EventItem>
          </div>
        ))}
      </EventSubContainer>
    </>
  );
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

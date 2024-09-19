import PropTypes from "prop-types";
import {
  PhotoCardDetails,
  PhotoCardImage,
  PhotoCardItem,
  PhotoCardName,
  PhotoCardPosition,
  PhotoCardImageContainer,
} from "./PhotoCardElements";

const PhotoCard = ({ TeamItems }) => {
  return (
    <>
      {TeamItems.map((item, index) => (
        <PhotoCardItem key={index}>
          <PhotoCardDetails>
            <PhotoCardImageContainer>
              <PhotoCardImage src={item.image} alt={item.name} />
            </PhotoCardImageContainer>
            <PhotoCardName>{item.name}</PhotoCardName>
            <PhotoCardPosition>{item.position}</PhotoCardPosition>
          </PhotoCardDetails>
        </PhotoCardItem>
      ))}
    </>
  );
};
PhotoCard.propTypes = {
  TeamItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PhotoCard;

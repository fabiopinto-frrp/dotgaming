import {
  ReviewCardDetails,
  ReviewCardItem,
  ReviewCardAvatar,
  ReviewCardCompanyName,
  ReviewCardField,
  ReviewCardName,
  ReviewCardDesc,
  ReviewCardHeader,
  ReviewCardTitle,
  ReviewCardContainer,
} from "./ReviewCardElements";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

const ReviewCard = ({ ReviewItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ReviewItems.length);
        setIsVisible(true);
      }, 2000); // Match the duration of the fade-out animation
    }, 5000);
    return () => clearInterval(interval);
  }, [ReviewItems.length]);

  const currentItem = ReviewItems[currentIndex];

  return (
    <ReviewCardContainer>
      <ReviewCardItem className={isVisible ? "visible" : "hidden"}>
        <ReviewCardDetails>
          <ReviewCardHeader>
            <ReviewCardAvatar src={currentItem.avatar} alt="avatar" />
            <ReviewCardTitle>
              <ReviewCardName>{currentItem.name}</ReviewCardName>
              <ReviewCardCompanyName>
                {currentItem.companyName}
              </ReviewCardCompanyName>
            </ReviewCardTitle>
          </ReviewCardHeader>
          <ReviewCardDesc>{currentItem.desc}</ReviewCardDesc>
          <ReviewCardField className="review-card-field">
            {currentItem.workField}
          </ReviewCardField>
        </ReviewCardDetails>
      </ReviewCardItem>
    </ReviewCardContainer>
  );
};

ReviewCard.propTypes = {
  ReviewItems: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      workField: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewCard;

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
} from "./ReviewCardElements";

import PropTypes from "prop-types";

const ReviewCard = ({ ReviewItems }) => {
  return (
    <>
      {ReviewItems.map((item, index) => (
        <ReviewCardItem key={index}>
          <ReviewCardDetails>
            <ReviewCardHeader>
              <ReviewCardAvatar src={item.avatar} alt="avatar" />
              <ReviewCardTitle>
                <ReviewCardName>{item.name}</ReviewCardName>
                <ReviewCardCompanyName>
                  {item.companyName}
                </ReviewCardCompanyName>
              </ReviewCardTitle>
            </ReviewCardHeader>
            <ReviewCardDesc>{item.desc}</ReviewCardDesc>
            <ReviewCardField className="review-card-field">
              {item.workField}
            </ReviewCardField>
          </ReviewCardDetails>
        </ReviewCardItem>
      ))}
    </>
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
